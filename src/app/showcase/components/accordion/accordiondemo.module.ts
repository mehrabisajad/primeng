import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccordionDemo} from './accordiondemo';
import {AccordionDemoRoutingModule} from './accordiondemo-routing.module';
import {AccordionModule} from 'avan-primeng/accordion';
import {ButtonModule} from 'avan-primeng/button';
import {TabViewModule} from 'avan-primeng/tabview';
import {ToastModule} from 'avan-primeng/toast';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		AccordionDemoRoutingModule,
        AccordionModule,
        ButtonModule,
        TabViewModule,
		ToastModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		AccordionDemo
	]
})
export class AccordionDemoModule {}
