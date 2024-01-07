import { aggregateProducts } from "./util/product";
import { DataSourceEnum } from "./types";

async function main() {
  const sources = [
    ...Object.values(DataSourceEnum),
    "invalid" as DataSourceEnum,
  ];

  aggregateProducts(sources).then(({ result, errors }) =>
    console.log({ result, errors })
  );
}
main();
