import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TooltipDemo} from './tooltipdemo';
import {TooltipDemoRoutingModule} from './tooltipdemo-routing.module';
import {TooltipModule} from 'avan-primeng/tooltip';
import {InputTextModule} from 'avan-primeng/inputtext';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {ButtonModule} from 'avan-primeng/button';
import {RippleModule} from 'avan-primeng/ripple';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		TooltipDemoRoutingModule,
        TooltipModule,
        InputTextModule,
		TabViewModule,
		AppCodeModule,
		ButtonModule,
		AppDemoActionsModule,
		RippleModule
	],
	declarations: [
		TooltipDemo
	]
})
export class TooltipDemoModule {}
