import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DragDropDemo} from './dragdropdemo';
import {DragDropDemoRoutingModule} from './dragdropdemo-routing.module';
import {DragDropModule} from 'avan-primeng/dragdrop';
import {PanelModule} from 'avan-primeng/panel';
import {TableModule} from 'avan-primeng/table';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';


@NgModule({
	imports: [
		CommonModule,
		DragDropDemoRoutingModule,
        DragDropModule,
        PanelModule,
        TableModule,
		TabViewModule,
		AppDemoActionsModule,
		AppCodeModule
	],
	declarations: [
		DragDropDemo
	]
})
export class DragDropDemoModule {}
