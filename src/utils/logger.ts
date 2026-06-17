export class Logger {
	static info = (message:string): void => {
		console.log(`[INFO] ${message}`);
	}
}