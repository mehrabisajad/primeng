import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CarouselDemo} from './carouseldemo';
import {CarouselDemoRoutingModule} from './carouseldemo-routing.module';
import {CarouselModule} from 'avan-primeng/carousel';
import {ButtonModule} from 'avan-primeng/button';
import {ToastModule} from 'avan-primeng/toast';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
        CarouselDemoRoutingModule,
        CarouselModule,
        ButtonModule,
        ToastModule,
        TabViewModule,
        AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		CarouselDemo
	]
})
export class CarouselDemoModule {}
