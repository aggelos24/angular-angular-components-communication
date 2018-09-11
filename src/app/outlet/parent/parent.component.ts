import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';

import { ChildComponent } from '../child/child.component';

import { Data } from '../../interfaces/data';

@Component({
	selector: 'app-parent',
	templateUrl: './parent.component.html'
})
export class ParentComponent implements OnInit {
	data: Data = {};
	
	buttonDisabled: boolean;								//if true 'Navigate to Child' button is disabled
	
	@ViewChild("firstName") inputFirstname: ElementRef;					//get DOM elements from ids
	@ViewChild("lastName") inputLastName: ElementRef;
	@ViewChild("address") inputAddress: ElementRef;
	
	constructor(private router: Router) {}
	
	ngOnInit() {
		this.buttonDisabled = false;							//initialize variable
	}
	
	onActivate(componentRef: any) {								//when a child is instatiated
		if (componentRef instanceof ChildComponent) {					//if it is the child we want
			componentRef.setData(this.data);					//set its data from parent's form data
			
			this.buttonDisabled = true;						//'Navigate to Child' button is disabled	
		}
	}
	
	onDeactivate(componentRef: any) {							//when child is destroyed
		if (componentRef instanceof ChildComponent) {					//if it is the child we want
			let temp = componentRef.getData();					//get its data
			this.inputFirstname.nativeElement.value = temp.firstName;		//set parent's form data
			this.inputLastName.nativeElement.value = temp.lastName;
			this.inputAddress.nativeElement.value = temp.address;
			
			this.buttonDisabled = false;						//'Navigate to Child' button is enabled
		}
	}
	
	navigateChild(firstName: string, lastname: string, address: string) {
		this.data = {									//store form data into variable
			firstName: firstName,
			lastName: lastname,
			address: address
		};
		
		this.router.navigate(['/outlet/child']);					//navigate to child
	}
}
