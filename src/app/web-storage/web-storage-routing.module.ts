import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WebStorageComponent } from './web-storage/web-storage.component';

const routes: Routes = [
	{ path: '', component: WebStorageComponent }
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class WebStorageRoutingModule { }
