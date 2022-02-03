import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'avan-primeng/dialog';
import { InputTextModule } from 'avan-primeng/inputtext';
import { ButtonModule } from 'avan-primeng/button';
import { AccordionModule } from 'avan-primeng/accordion';
import { TabViewModule } from 'avan-primeng/tabview';
import { FocusTrapDemoRoutingModule } from './focustrapdemo-routing.module';
import { FocusTrapDemo } from './focustrapdemo';
import { AutoCompleteModule } from 'avan-primeng/autocomplete';
import { CalendarModule } from 'avan-primeng/calendar';
import { MultiSelectModule } from 'avan-primeng/multiselect';
import { DropdownModule } from 'avan-primeng/dropdown';
import { EditorModule } from 'avan-primeng/editor';
import { FocusTrapModule } from 'avan-primeng/focustrap';
import { AppCodeModule } from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
		FocusTrapDemoRoutingModule,
        FormsModule,
        DialogModule,
        ButtonModule,
        InputTextModule,
        AccordionModule,
        TabViewModule,
        AppCodeModule,
        FocusTrapModule,
		AutoCompleteModule,
		CalendarModule,
		MultiSelectModule,
		DropdownModule,
		EditorModule,
		AppDemoActionsModule
	],
	declarations: [
		FocusTrapDemo
	]
})
export class FocusTrapDemoModule {}
