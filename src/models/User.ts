import type { IUser } from "../interfaces/IUser";

export class User implements IUser {

	constructor(

		public name: string,
		public id: number,
		public email: string
	) { }

	displayInfo = (): void => {
		console.log(
			`Id: ${this.id} , name: ${this.name}, email: ${this.email}`
		);
	}
}