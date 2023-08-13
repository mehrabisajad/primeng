import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabMenuDemo} from './tabmenudemo';
import {TabMenuDemoRoutingModule} from './tabmenudemo-routing.module';
import {TabMenuModule} from 'avan-primeng/tabmenu';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		TabMenuDemoRoutingModule,
        TabMenuModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		TabMenuDemo,
	]
})
export class TabMenuDemoModule {}
