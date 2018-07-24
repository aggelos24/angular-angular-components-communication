import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OutletRoutingModule } from './outlet-routing.module';

import { OutletComponent } from './outlet/outlet.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';

@NgModule({
	imports: [
		CommonModule,
		OutletRoutingModule
	],
	declarations: [
		OutletComponent,
		ChildComponent,
		ParentComponent
	]
})
export class OutletModule { }
