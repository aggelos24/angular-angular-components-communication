import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

@NgModule({
	declarations: [
		AppComponent,
		IntroductionComponent,
		ConclusionComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [ Title ],
	bootstrap: [ AppComponent ]
})
export class AppModule { }
