import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MenuDemo} from './menudemo';
import {MenuDemoRoutingModule} from './menudemo-routing.module';
import {MenuModule} from 'avan-primeng/menu'
import {ButtonModule} from 'avan-primeng/button';
import {TabViewModule} from 'avan-primeng/tabview';
import {ToastModule} from 'avan-primeng/toast';
import { AppCodeModule } from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		MenuDemoRoutingModule,
        MenuModule,
        ButtonModule,
		TabViewModule,
		ToastModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		MenuDemo
	]
})
export class MenuDemoModule {}
