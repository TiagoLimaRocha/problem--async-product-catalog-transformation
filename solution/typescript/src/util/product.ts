import {
  DataShape1,
  DataShape2,
  DataShape3,
  DataSourceEnum,
  Product,
  PromiseSettleStatusEnum,
  ValidData,
} from "../types";
import { request } from "../util/request";
import { isTypeOf } from "../util/isTypeOf";

class TransformedData implements Product {
  constructor(
    public readonly id: string,
    public readonly name: string,
    public readonly price: number,
    public readonly description?: string
  ) { }
}

function transformProductData(data: ValidData): Product[] {
  const transformed: Product[] = [];

  if (isTypeOf<DataShape3>(data, "productId")) {
    data.forEach((item) => {
      const { productId, title, priceTag } = item;
      transformed.push(
        new TransformedData(
          productId as string,
          title as string,
          priceTag as number
        )
      );
    });
  }

  if (isTypeOf<DataShape1>(data, "products")) {
    const { products } = data;
    products.forEach((item) => {
      const { id, productName, price } = item;
      transformed.push(
        new TransformedData(
          id as string,
          productName as string,
          price as number
        )
      );
    });
  }

  if (isTypeOf<DataShape2>(data, "inventory")) {
    const { inventory } = data;
    inventory.forEach((item) => {
      const { productCode, description, cost } = item;
      transformed.push(
        new TransformedData(
          productCode as string,
          description as string,
          cost as number
        )
      );
    });
  }

  return transformed;
}

export async function aggregateProducts(sources: DataSourceEnum[]) {
  const errors: Error[] = [];
  const transformed: any[] = [];

  const promises = sources.map((source) =>
    request(source).then((data) => transformProductData(data as ValidData))
  );

  await Promise.allSettled(promises).then((promise) =>
    promise.forEach((settled) => {
      settled.status === PromiseSettleStatusEnum.Fulfilled
        ? transformed.push(settled.value)
        : errors.push(settled.reason);
    })
  );

  return { result: transformed.flat(), errors };
}
