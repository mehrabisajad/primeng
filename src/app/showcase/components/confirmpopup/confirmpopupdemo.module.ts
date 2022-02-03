import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ConfirmPopupDemo} from './confirmpopupdemo';
import {ConfirmPopupDemoRoutingModule} from './confirmpopupdemo-routing.module';
import {ConfirmPopupModule} from 'avan-primeng/confirmpopup';
import {ToastModule} from 'avan-primeng/toast';
import {ButtonModule} from 'avan-primeng/button';
import {MessagesModule} from 'avan-primeng/messages';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		ConfirmPopupDemoRoutingModule,
        ConfirmPopupModule,
        ButtonModule,
		MessagesModule,
		ToastModule,
		TabViewModule,
		AppDemoActionsModule,
		AppCodeModule
	],
	declarations: [
		ConfirmPopupDemo
	]
})
export class ConfirmPopupDemoModule {}
