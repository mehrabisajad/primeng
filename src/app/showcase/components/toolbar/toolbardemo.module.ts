import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ToolbarDemo} from './toolbardemo';
import {ToolbarDemoRoutingModule} from './toolbardemo-routing.module';
import {ToolbarModule} from 'avan-primeng/toolbar';
import {ButtonModule} from 'avan-primeng/button';
import {SplitButtonModule} from 'avan-primeng/splitbutton';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		ToolbarDemoRoutingModule,
        ToolbarModule,
        ButtonModule,
        SplitButtonModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		ToolbarDemo
	]
})
export class ToolbarDemoModule {}
