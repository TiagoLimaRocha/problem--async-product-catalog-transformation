import { TimeoutError } from "../exception/timeout.exception";

export async function withTimeout<T>(callback: () => Promise<T>) {
  const timeoutPromise = new Promise<T>((_, reject) => {
    setTimeout(() => reject(new TimeoutError("Request timed out")), 1000);
  });

  const callbackPromise = callback();

  return Promise.race([timeoutPromise, callbackPromise]);
}
