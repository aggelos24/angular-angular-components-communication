import { Component } from '@angular/core';

import { SharingVariablesService } from '../sharing-variables.service';

@Component({
	selector: 'app-second',
	templateUrl: './second.component.html'
})
export class SecondComponent {
	constructor(private sharingVariablesService: SharingVariablesService) {}
}
