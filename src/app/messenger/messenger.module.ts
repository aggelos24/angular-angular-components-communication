import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessengerRoutingModule } from './messenger-routing.module';

import { MessengerService } from './messenger.service';

import { MessengerComponent } from './messenger/messenger.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
	imports: [
		CommonModule,
		MessengerRoutingModule
	],
	declarations: [
		MessengerComponent,
		FirstComponent,
		SecondComponent
	],
	providers: [ MessengerService ]
})
export class MessengerModule { }
