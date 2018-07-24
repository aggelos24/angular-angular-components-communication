import { Component } from '@angular/core';

import { SharingVariablesService } from '../sharing-variables.service';

@Component({
	selector: 'app-first',
	templateUrl: './first.component.html'
})
export class FirstComponent {
	constructor(private sharingVariablesService: SharingVariablesService) {}
}
