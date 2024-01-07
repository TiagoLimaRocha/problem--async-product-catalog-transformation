import { NotFoundError } from "../exception/not-found.exception";
import { Data, DataSourceEnum } from "../types";
import { InvalidDataError } from "../exception/invalid-data.exeption";

export function isValidData(source: DataSourceEnum, data: any) {
  const conditions: boolean[] = [];
  const atLeastOneConditionFails = (conditions: boolean[]) =>
    conditions.some((condition) => condition);

  if (!data) {
    console.log(`Data source ${source} not found`)
    throw new NotFoundError(`Data source ${source} not found`);
  }

  switch (source) {
    case DataSourceEnum.Supplier1:
      const { supplierName, products } = data || {};
      conditions.push(
        !supplierName,
        !products,
        !Array.isArray(products),
        products.some(
          ({ id, productName, price }: Data) => !id || !productName || !price
        )
      );
      break;
    case DataSourceEnum.Supplier2:
      const { company, inventory } = data || {};
      conditions.push(
        !company,
        !inventory,
        !Array.isArray(inventory),
        inventory.some(
          ({ productCode, description, cost }: Data) =>
            !productCode || !description || !cost
        )
      );
      break;
    case DataSourceEnum.Supplier3:
      conditions.push(
        !Array.isArray(data),
        data.some(
          ({ productId, title, priceTag }: Data) =>
            !productId || !title || !priceTag
        )
      );
      break;
    default:
      throw new NotFoundError(`Data source ${source} not found`);
  }

  if (atLeastOneConditionFails(conditions)) {
    throw new InvalidDataError(`Invalid data shape: ${data}`);
  }

  return true;
}
