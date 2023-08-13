import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MegaMenuDemo} from './megamenudemo';
import {MegaMenuDemoRoutingModule} from './megamenudemo-routing.module';
import {MegaMenuModule} from 'avan-primeng/megamenu';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		MegaMenuDemoRoutingModule,
        MegaMenuModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		MegaMenuDemo
	]
})
export class MegaMenuDemoModule {}
