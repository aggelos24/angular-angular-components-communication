import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroductionComponent } from './introduction/introduction.component';
import { ConclusionComponent } from './conclusion/conclusion.component';

const appRoutes: Routes = [
	{ path: 'introduction', component: IntroductionComponent },
	{ path: '', redirectTo: 'introduction', pathMatch: 'full' },
	{ path: 'sharing-variables', loadChildren: './sharing-variables/sharing-variables.module#SharingVariablesModule' },
	{ path: 'web-storage', loadChildren: './web-storage/web-storage.module#WebStorageModule' },
	{ path: 'url-params', loadChildren: './url-params/url-params.module#UrlParamsModule' },
	{ path: 'outlet', loadChildren: './outlet/outlet.module#OutletModule' },
	{ path: 'input-output', loadChildren: './input-output/input-output.module#InputOutputModule' },
	{ path: 'messenger', loadChildren: './messenger/messenger.module#MessengerModule' },
	{ path: 'conclusion', component: ConclusionComponent }
];

@NgModule({
	imports: [ RouterModule.forRoot(appRoutes, { useHash: true }) ],
	exports: [ RouterModule ]
})
export class AppRoutingModule { }
