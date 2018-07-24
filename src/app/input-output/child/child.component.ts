import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Data } from '../../interfaces/Data';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html'
})
export class ChildComponent {
	@Input() data: Data;					//input variable
	@Output() updated = new EventEmitter<Data>();		//output event
	
	updateParent() {
		this.updated.emit(this.data);			//emit variable as output
	}
}
