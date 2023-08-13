import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TagDemo} from './tagdemo';
import {TagDemoRoutingModule} from './tagdemo-routing.module';
import {ButtonModule} from 'avan-primeng/button';
import {PanelModule} from 'avan-primeng/panel';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import { TagModule } from 'avan-primeng/tag';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		TagDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		TagModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		TagDemo
	]
})
export class TagDemoModule {}
