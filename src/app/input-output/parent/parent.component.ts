import { Component } from '@angular/core';

import { Data } from '../../interfaces/Data';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html'
})
export class ParentComponent {
	data: Data = {};			//form data
	
	updateData(newValue: Data) {		//output event handler
		this.data = newValue;		//update variable with the emitted value
	}
}
