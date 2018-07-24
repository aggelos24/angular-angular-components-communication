import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { SharingVariablesRoutingModule } from './sharing-variables-routing.module';

import { SharingVariablesService } from './sharing-variables.service';

import { SharingVariablesComponent } from './sharing-variables/sharing-variables.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		SharingVariablesRoutingModule
	],
	declarations: [
		SharingVariablesComponent,
		FirstComponent,
		SecondComponent
	],
	providers: [ SharingVariablesService ]
})
export class SharingVariablesModule { }
