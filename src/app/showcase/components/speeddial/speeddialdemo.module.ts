import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TabViewModule} from 'avan-primeng/tabview';
import {ProgressSpinnerModule} from 'avan-primeng/progressspinner';
import {RippleModule} from 'avan-primeng/ripple';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';
import { SpeedDialModule } from 'avan-primeng/speeddial';
import { SpeedDialDemo } from './speeddialdemo';
import { SpeedDialDemoRoutingModule } from './speeddialdemo-routing.module';
import { ToastModule } from 'avan-primeng/toast';

@NgModule({
	imports: [
		CommonModule,
		SpeedDialDemoRoutingModule,
        TabViewModule,
		AppCodeModule,
        ProgressSpinnerModule,
		AppDemoActionsModule,
        SpeedDialModule,
        ToastModule,
        RippleModule
	],
	declarations: [
		SpeedDialDemo
	]
})
export class SpeedDialDemoModule {}
