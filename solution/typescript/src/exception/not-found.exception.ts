export class NotFoundError extends Error {
  constructor(
    message: string,
    private readonly statusCode: number = 404,
    private readonly timestamp = new Date().toISOString()
  ) {
    super(message);
    this.name = "NotFoundError";
  }
}
