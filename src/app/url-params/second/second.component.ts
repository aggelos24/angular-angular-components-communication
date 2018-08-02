import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Subscription } from 'rxjs';

import { Data } from '../../interfaces/Data';

@Component({
	selector: 'app-second',
	templateUrl: './second.component.html'
})
export class SecondComponent implements OnInit, OnDestroy {
	sub: Subscription;								//variable for managing subscription
	
	data: Data = {};								//variable for storing variables for query parameters
	
	noData: boolean;								//true if no data from query parameters

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.sub = this.route.queryParamMap.subscribe((params: ParamMap) => {
											//subscribe to change of query parameters
			this.noData = true;
			if (params.has('firstName')) {					//if there is query parameter with specific key
				this.data.firstName = params.get('firstName');		//update variables
				this.noData = false;
			}
			if (params.has('lastName')) {					//if there is query parameter with specific key
				this.data.lastName = params.get('lastName');		//update variables
				this.noData = false;
			}
			if (params.has('address')) {					//if there is query parameter with specific key
				this.data.address = params.get('address');		//update variables
				this.noData = false;
			}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();							//end subscription
	}
}
