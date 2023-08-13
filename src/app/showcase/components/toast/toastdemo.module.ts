import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToastDemo} from './toastdemo';
import {ToastDemoRoutingModule} from './toastdemo-routing.module';
import {ToastModule} from 'avan-primeng/toast';
import {ButtonModule} from 'avan-primeng/button';
import {TabViewModule} from 'avan-primeng/tabview';
import {RippleModule} from 'avan-primeng/ripple';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		ToastDemoRoutingModule,
        ToastModule,
        ButtonModule,
        TabViewModule,
        RippleModule,
		AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		ToastDemo
	]
})
export class ToastDemoModule {}
