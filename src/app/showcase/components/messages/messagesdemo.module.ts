import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MessagesDemo} from './messagesdemo';
import {MessagesDemoRoutingModule} from './messagesdemo-routing.module';
import {MessagesModule} from 'avan-primeng/messages';
import {MessageModule} from 'avan-primeng/message';
import {InputTextModule} from 'avan-primeng/inputtext';
import {ButtonModule} from 'avan-primeng/button';
import {TabViewModule} from 'avan-primeng/tabview';
import {RippleModule} from 'avan-primeng/ripple';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		MessagesDemoRoutingModule,
        MessagesModule,
        MessageModule,
        ButtonModule,
        InputTextModule,
        TabViewModule,
        RippleModule,
        AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		MessagesDemo
	]
})
export class MessagesDemoModule {}
