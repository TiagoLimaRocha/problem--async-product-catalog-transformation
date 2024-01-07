import { DataSourceEnum, ValidData } from "../types";
import { sources } from "../mock/data";
import { isValidData } from "./isValidData";
import { withTimeout } from "../hooks/withTimeout";
import { TimeoutError } from "../exception/timeout.exception";
import { NotFoundError } from "../exception/not-found.exception";
import { InvalidDataError } from "../exception/invalid-data.exeption";

export async function get(source: DataSourceEnum): Promise<ValidData> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      try {
        const data = sources?.[source] || {};
        const isValid = isValidData(source, data);
        if (isValid) {
          resolve(data as ValidData);
        } else {
          throw isValid;
        }
      } catch (error) {
        reject(error);
      }
    }, Math.random() * 1000);
  });
}

export async function request(source: DataSourceEnum, retry = 3): Promise<unknown> {
  while (retry > 0) {
    try {
      return await withTimeout<ValidData>(() => get(source));
    } catch (error) {
      const shouldRetry = [TimeoutError, NotFoundError, InvalidDataError].some(
        (exception) => error instanceof exception
      );

      if (shouldRetry) {
        retry--;
      }

      if (!retry) {
        throw error;
      }
    }
  }
}
