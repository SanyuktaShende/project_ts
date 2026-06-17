import { User } from "./models/User";
import { UserService } from "./services/UserService";
import { Logger } from "./utils/logger";



async function main(){
	
	Logger.info("Application started")
	
	const user = new User(
		1,
		'Sanyukta',
		'shende@gmail.com'
		
	)
	
	user.displayInfo();
	
	const service = new UserService();
	
	const users = await service.getUsers();

	console.log(users);
	
}

main();