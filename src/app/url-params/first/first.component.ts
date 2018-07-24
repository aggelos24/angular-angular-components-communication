import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html'
})
export class FirstComponent {
	constructor(private router: Router) {}
	
	storeUrlParameters(firstName, lastName, address) {
		this.router.navigate(['/url-params'],					//navigate to current page with form data as query parameters
							 { queryParams: {
								 firstName: firstName,
								 lastName: lastName,
								 address: address
							 }});
	}
}
