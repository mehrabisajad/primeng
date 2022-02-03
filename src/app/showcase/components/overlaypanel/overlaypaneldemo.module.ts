import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OverlayPanelDemo} from './overlaypaneldemo';
import {OverlayPanelDemoRoutingModule} from './overlaypaneldemo-routing.module';
import {OverlayPanelModule} from 'avan-primeng/overlaypanel';
import {ButtonModule} from 'avan-primeng/button';
import {TableModule} from 'avan-primeng/table';
import {TabViewModule} from 'avan-primeng/tabview';
import {ToastModule} from 'avan-primeng/toast';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		OverlayPanelDemoRoutingModule,
        OverlayPanelModule,
        ButtonModule,
        TableModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule,
		ToastModule
	],
	declarations: [
		OverlayPanelDemo
	]
})
export class OverlayPanelDemoModule {}
