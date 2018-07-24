import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WebStorageRoutingModule } from './web-storage-routing.module';

import { WebStorageComponent } from './web-storage/web-storage.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';

@NgModule({
	imports: [
		CommonModule,
		WebStorageRoutingModule
	],
	declarations: [
		WebStorageComponent,
		FirstComponent,
		SecondComponent
	]
})
export class WebStorageModule { }
