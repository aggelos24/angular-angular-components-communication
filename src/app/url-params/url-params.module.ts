import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlParamsRoutingModule } from './url-params-routing.module';

import { UrlParamsComponent } from './url-params/url-params.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
	imports: [
		CommonModule,
		UrlParamsRoutingModule
	],
	declarations: [
		UrlParamsComponent,
		FirstComponent,
		SecondComponent
	]
})
export class UrlParamsModule { }
