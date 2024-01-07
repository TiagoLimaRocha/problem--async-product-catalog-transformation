export class InvalidDataError extends Error {
  constructor(
    message: string,
    private readonly statusCode = 500,
    private readonly timestamp = new Date().toISOString()
  ) {
    super(message);
    this.name = "InvalidDataError";
  }
}
