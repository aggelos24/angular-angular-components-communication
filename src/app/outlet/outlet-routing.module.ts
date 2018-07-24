import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OutletComponent } from './outlet/outlet.component';
import { ChildComponent } from './child/child.component';

const routes: Routes = [
	{
		path: '', component: OutletComponent,
		children: [
			{ path: 'child', component: ChildComponent }
		]
	}
];

@NgModule({
	imports: [ RouterModule.forChild(routes) ],
	exports: [ RouterModule ]
})
export class OutletRoutingModule { }
