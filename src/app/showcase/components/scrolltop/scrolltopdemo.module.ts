import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ScrollTopDemo} from './scrolltopdemo';
import {ScrollTopDemoRoutingModule} from './scrolltopdemo-routing.module';
import {ButtonModule} from 'avan-primeng/button';
import {PanelModule} from 'avan-primeng/panel';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {TableModule} from 'avan-primeng/table';
import {ScrollTopModule} from 'avan-primeng/scrolltop';
import {ScrollPanelModule} from 'avan-primeng/scrollpanel';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		ScrollTopDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		ScrollTopModule,
		ScrollPanelModule,
		TableModule,
		AppDemoActionsModule,
		AppCodeModule
	],
	declarations: [
		ScrollTopDemo
	]
})
export class ScrollTopDemoModule {}
