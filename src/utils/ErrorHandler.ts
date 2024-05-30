import HTTP_STATUS from "http-status-codes";

export interface Error {
	message: string;
	status_code: number;
	status: string;
}

export interface ErrorResponse {
	message: string;
	status_code: number;
	status: string;
	serializeError(): Error;
}

export abstract class CustomError extends Error {
	abstract status: string;
	abstract status_code: Number;

	constructor(message: string) {
		super(message);
	}
}
