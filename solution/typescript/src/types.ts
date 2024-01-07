export enum DataSourceEnum {
  Supplier1 = "supplier1",
  Supplier2 = "supplier2",
  Supplier3 = "supplier3",
}

export enum PromiseSettleStatusEnum {
  Fulfilled = "fulfilled",
  Rejected = "rejected",
}

export type Data = {
  id?: string;
  productId?: string;
  productCode?: string;
  title?: string;
  productName?: string;
  description?: string;
  price?: number;
  cost?: number;
  priceTag?: number;
};

export type DataShape1 = {
  supplierName: string;
  products: Data[];
};

export type DataShape2 = {
  company: string;
  inventory: Data[];
};

export type DataShape3 = Data[];

export type ValidData = DataShape1 | DataShape2 | DataShape3;

export interface Product {
  id: string;
  name: string;
  price: number;
  description?: string;
};

export type TransformedData = Product[];
