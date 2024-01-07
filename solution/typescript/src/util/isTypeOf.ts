export function isTypeOf<T>(object: any, attr: string): object is T {
  if (Array.isArray(object)) {
    return object.every((item) => item[attr] !== undefined);
  }

  return <T>object[attr] !== undefined;
}
