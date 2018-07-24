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
	
	noData: boolean;								//true if no data have been received

	constructor(private route: ActivatedRoute) {}

	ngOnInit() {
		this.sub = this.route.queryParams.subscribe((params: Data) => {
											//subscribe to change of query parameters
				if (Object.keys(params).length != 0) {			//if there are query parameters
					this.data = params;				//update variables
					this.noData = false;
				}
				else {
					this.noData = true;
				}
		});
	}

	ngOnDestroy() {
		this.sub.unsubscribe();							//end subscription
	}
}
