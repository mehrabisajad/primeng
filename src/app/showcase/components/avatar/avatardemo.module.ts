import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AvatarDemo} from './avatardemo';
import {AvatarDemoRoutingModule} from './avatardemo-routing.module';
import {AccordionModule} from 'avan-primeng/accordion';
import {ButtonModule} from 'avan-primeng/button';
import {TabViewModule} from 'avan-primeng/tabview';
import {ToastModule} from 'avan-primeng/toast';
import { AvatarModule } from 'avan-primeng/avatar';
import { AvatarGroupModule } from 'avan-primeng/avatargroup';
import { BadgeModule } from 'avan-primeng/badge';
import { AppCodeModule } from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		AvatarDemoRoutingModule,
        AccordionModule,
        ButtonModule,
        TabViewModule,
		ToastModule,
		AvatarModule,
		AvatarGroupModule,
		BadgeModule,
		AppDemoActionsModule,
		AppCodeModule
	],
	declarations: [
		AvatarDemo
	]
})
export class AvatarDemoModule {}
