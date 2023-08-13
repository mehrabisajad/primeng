import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ImageDemoRoutingModule} from './imagedemo-routing.module';
import {ButtonModule} from 'avan-primeng/button';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';
import {ImageDemo} from './imagedemo';
import {ImageModule} from 'avan-primeng/image';

@NgModule({
	imports: [
		CommonModule,
		ImageDemoRoutingModule,
        ButtonModule,
        TabViewModule,
		AppCodeModule,
        ImageModule,
		AppDemoActionsModule
	],
	declarations: [
		ImageDemo
	]
})
export class ImageDemoModule {}
