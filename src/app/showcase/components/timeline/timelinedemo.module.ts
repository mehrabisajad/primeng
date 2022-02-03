import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TimelineDemo} from './timelinedemo';
import {TimelineDemoRoutingModule} from './timelinedemo-routing.module';
import {TimelineModule} from 'avan-primeng/timeline';
import {CardModule} from 'avan-primeng/card';
import {ButtonModule} from 'avan-primeng/button';
import {SplitButtonModule} from 'avan-primeng/splitbutton';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		TimelineDemoRoutingModule,
		TimelineModule,
		CardModule,
        ButtonModule,
        SplitButtonModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		TimelineDemo
	]
})
export class TimelineDemoModule {}
