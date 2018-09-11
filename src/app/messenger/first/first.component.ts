import { Component } from '@angular/core';

import { MessengerService } from '../messenger.service';

import { Message } from '../../interfaces/message';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html'
})
export class FirstComponent {
	message: Message;								//variable for storing data for message
	
	constructor(private messengerService: MessengerService) {}
	
	sendMessage(firstName: string, lastName: string, address: string) {
		this.message = {							//create message from form data
			to: 'SecondComponent',
			data: {
				firstName: firstName,
				lastName: lastName,
				address: address
			}
		};
		
		this.messengerService.setMessage(this.message);				//send message
	}
}
