import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UrlParamsComponent } from './url-params/url-params.component';

const routes: Routes = [
	{ path: '', component: UrlParamsComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class UrlParamsRoutingModule { }
