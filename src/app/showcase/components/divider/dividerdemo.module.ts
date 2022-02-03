import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DividerDemo} from './dividerdemo';
import {TagDemoRoutingModule} from './dividerdemo-routing.module';
import {ButtonModule} from 'avan-primeng/button';
import {PanelModule} from 'avan-primeng/panel';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {DividerModule} from 'avan-primeng/divider';
import {InputTextModule} from 'avan-primeng/inputtext';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		TagDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		DividerModule,
		InputTextModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		DividerDemo
	]
})
export class DividerDemoModule {}
