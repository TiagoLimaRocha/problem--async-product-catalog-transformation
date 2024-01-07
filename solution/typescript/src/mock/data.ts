import { DataSourceEnum } from "../types";

export const sources = {
  [DataSourceEnum.Supplier1]: {
    supplierName: "GadgetsPro",
    products: [
      { id: "A1", productName: "Smartphone", price: 299 },
      { id: "A2", productName: "Laptop", price: 899 },
    ],
  },
  [DataSourceEnum.Supplier2]: {
    company: "HomeElectronics",
    inventory: [
      { productCode: "B1", description: "Bluetooth Speaker", cost: 99 },
      { productCode: "B2", description: "Electric Kettle", cost: 49 },
    ],
  },
  [DataSourceEnum.Supplier3]: [
    { productId: "C1", title: "LED TV", priceTag: 399 },
    { productId: "C2", title: "Wireless Headphones", priceTag: 149 },
  ],
};
