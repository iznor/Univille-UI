class HttpError extends Error {
  statusCode: string | number;

  data: any;

  constructor(message, statusCode, errorData = null) {
    super(message);
    this.statusCode = statusCode;
    this.data = errorData;
  }
}

export { HttpError };
