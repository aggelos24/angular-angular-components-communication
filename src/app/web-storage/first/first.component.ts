import { Component, OnInit } from '@angular/core';

import { Data } from '../../interfaces/Data';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html'
})
export class FirstComponent implements OnInit {
	componentEnabled: boolean;							//if true SecondComponent is enabled

	ngOnInit() {
		this.componentEnabled = false;						//initialize variable
	}
	
	storeAndEnable(firstName: string, lastname: string, address: string) {
		sessionStorage.setItem('firstName', firstName);				//store form data into sessionStorage
		sessionStorage.setItem('lastName', lastname);
		sessionStorage.setItem('address', address);
		
		this.componentEnabled = true;						//enable SecondComponent		
	}
}
