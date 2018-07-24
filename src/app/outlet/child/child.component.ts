import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { Data } from '../../interfaces/Data';

@Component({
	selector: 'app-child',
	templateUrl: './child.component.html'
})
export class ChildComponent {
	data: Data = {};								//variable for storing form data
	
	@ViewChild("firstName") inputFirstname: ElementRef;				//get DOM elements from ids
	@ViewChild("lastName") inputLastName: ElementRef;
	@ViewChild("address") inputAddress: ElementRef;

	constructor(private router: Router) {}
	
	setData(input: Data) {								//this function is called from parent to set data
		this.inputFirstname.nativeElement.value = input.firstName;		//set values of input elements
		this.inputLastName.nativeElement.value = input.lastName;
		this.inputAddress.nativeElement.value = input.address;
	}
	
	getData(): Data {								//this function is called from parent to get data
		return this.data;
	}

	navigateAway(firstName: string, lastname: string, address: string) {
		this.data = {								//store form data into variable
			firstName: firstName,
			lastName: lastname,
			address: address
		};
		
		this.router.navigate(['/outlet']);					//navigate to parent
	}
}
