import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { FloatLabelDemo } from './floatlabeldemo';
import { FloatLabelDemoRoutingModule } from './floatlabeldemo-routing.module';

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

import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';
import { PasswordModule } from 'avan-primeng/password';

@NgModule({
	imports: [
		CommonModule,
		FloatLabelDemoRoutingModule,
        ButtonModule,
        PanelModule,
		TabViewModule,
		InputTextModule,
		AutoCompleteModule,
		CalendarModule,
		CascadeSelectModule,
		ChipsModule,
		InputMaskModule,
		InputNumberModule,
		DropdownModule,
		MultiSelectModule,
		InputTextareaModule,
		FormsModule,
		AppDemoActionsModule,
        AppCodeModule,
		PasswordModule
	],
	declarations: [
		FloatLabelDemo
	]
})
export class FloatLabelDemoModule {}
