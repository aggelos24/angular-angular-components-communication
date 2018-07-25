import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import { Message } from '../interfaces/Message';


@Injectable()
export class MessengerService {
	private messageSource = new BehaviorSubject<Message>(null);		//create BehaviorSubject with null as initial value
	message = this.messageSource.asObservable();				//this is the variable to which recipients subscribe
	
	setMessage(message: Message) {						//this is called by the sender with the message it wants to send
		this.messageSource.next(message);				//message is emitted
	}
}
