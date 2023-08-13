import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { InvalidDemo } from './invaliddemo';
import { InvalidDemoRoutingModule } from './invaliddemo-routing.module';

import { ButtonModule } from 'avan-primeng/button';
import { PanelModule } from 'avan-primeng/panel';
import { TabViewModule } from 'avan-primeng/tabview';
import { InputTextModule } from 'avan-primeng/inputtext';
import { AutoCompleteModule } from 'avan-primeng/autocomplete';
import { CalendarModule } from 'avan-primeng/calendar';
import { ChipsModule } from 'avan-primeng/chips';
import { InputMaskModule } from 'avan-primeng/inputmask';
import { InputNumberModule } from 'avan-primeng/inputnumber';
import { DropdownModule } from 'avan-primeng/dropdown';
import { MultiSelectModule } from 'avan-primeng/multiselect';
import { InputTextareaModule } from 'avan-primeng/inputtextarea';
import { CascadeSelectModule } from 'avan-primeng/cascadeselect';
import { PasswordModule } from 'avan-primeng/password';
import { TreeSelectModule } from 'avan-primeng/treeselect';

import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		InvalidDemoRoutingModule,
		ButtonModule,
		CascadeSelectModule,
        PanelModule,
		TabViewModule,
		InputTextModule,
		AutoCompleteModule,
		CalendarModule,
		ChipsModule,
		InputMaskModule,
		InputNumberModule,
		DropdownModule,
		MultiSelectModule,
		InputTextareaModule,
        PasswordModule,
        TreeSelectModule,
		FormsModule,
		AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		InvalidDemo
	]
})
export class InvalidDemoModule {}
