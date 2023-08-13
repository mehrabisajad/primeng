import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DeferDemo} from './deferdemo';
import {DeferDemoRoutingModule} from './deferdemo-routing.module';
import {DeferModule} from 'avan-primeng/defer';
import {TableModule} from 'avan-primeng/table';
import {ToastModule} from 'avan-primeng/toast';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		DeferDemoRoutingModule,
        DeferModule,
        ToastModule,
        TabViewModule,
        TableModule,
		AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		DeferDemo
	]
})
export class DeferDemoModule {}
