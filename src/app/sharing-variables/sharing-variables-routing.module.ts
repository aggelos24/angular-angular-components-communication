import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SharingVariablesComponent } from './sharing-variables/sharing-variables.component';

const routes: Routes = [
	{ path: '', component: SharingVariablesComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class SharingVariablesRoutingModule { }
