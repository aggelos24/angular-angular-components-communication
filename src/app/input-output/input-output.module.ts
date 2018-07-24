import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { InputOutputRoutingModule } from './input-output-routing.module';

import { InputOutputComponent } from './input-output/input-output.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		InputOutputRoutingModule
	],
	declarations: [
		InputOutputComponent,
		ParentComponent,
		ChildComponent
	]
})
export class InputOutputModule { }
