import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { MessengerService } from '../messenger.service';

import { Message } from '../../interfaces/message';

@Component({
	selector: 'app-second',
	templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit, OnDestroy {
	sub: Subscription;									//variable for managing subscription
	
	message: Message;									//variable for storing data from message
	
	noData: boolean;									//true if no data have been received
	
	constructor(private messengerService: MessengerService) {}

	ngOnInit() {
		this.noData = true;								//initialize variable
		
		this.sub = this.messengerService.message.pipe(
			filter(message => (message && message.to == 'SecondComponent'))		//reject message if message's recipient is not this component
		)
		.subscribe(message => {								//subscribe to service's response
			this.message = message;							//update variables
			this.noData = false;
		});
	}
	
	ngOnDestroy() {
		this.sub.unsubscribe();								//end subscription
	}
}
