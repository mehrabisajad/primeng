import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BadgeDemo} from './badgedemo';
import {BadgeDemoRoutingModule} from './badgedemo-routing.module';
import {ButtonModule} from 'avan-primeng/button';
import {PanelModule} from 'avan-primeng/panel';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import { BadgeModule } from 'avan-primeng/badge';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		BadgeDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		BadgeModule,
		AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		BadgeDemo
	]
})
export class BadgeDemoModule {}
