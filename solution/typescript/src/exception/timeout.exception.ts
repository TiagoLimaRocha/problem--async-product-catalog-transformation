export class TimeoutError extends Error {
  constructor(
    message: string,
    private readonly statusCode: number = 408,
    private readonly timestamp = new Date().toISOString()
  ) {
    super(message);
    this.name = "TimeoutError";
  }
}
