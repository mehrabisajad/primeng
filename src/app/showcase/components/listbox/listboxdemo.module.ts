import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {ListboxDemo} from './listboxdemo';
import {ListboxDemoRoutingModule} from './listboxdemo-routing.module';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';
import {ListboxModule} from 'avan-primeng/listbox';
import {ButtonModule} from 'avan-primeng/button';
import {TabViewModule} from 'avan-primeng/tabview';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		ListboxDemoRoutingModule,
        ListboxModule,
        ButtonModule,
		TabViewModule,
		AppDemoActionsModule,
		AppCodeModule
	],
	declarations: [
		ListboxDemo
	]
})
export class ListboxDemoModule {}
