import { Component, OnInit } from '@angular/core';

import { Data } from '../../interfaces/Data';

@Component({
	selector: 'app-second',
	templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit {
	data: Data;								//data from sessionStorage
	
	ngOnInit() {
		this.data = {							//retrieve data from sessionStorage
			firstName: sessionStorage.getItem('firstName'),
			lastName: sessionStorage.getItem('lastName'),
			address: sessionStorage.getItem('address')
		};
	}
}
