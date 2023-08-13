import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PickListDemo} from './picklistdemo';
import {PickListDemoRoutingModule} from './picklistdemo-routing.module';
import {PickListModule} from 'avan-primeng/picklist';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		PickListDemoRoutingModule,
        PickListModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		PickListDemo
	]
})
export class PickListDemoModule {}
