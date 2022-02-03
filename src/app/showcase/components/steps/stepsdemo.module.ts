import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StepsDemo} from './stepsdemo';
import { StepsDemoRoutingModule } from './stepsdemo-routing.module';
import { StepsModule } from 'avan-primeng/steps';
import { TabViewModule } from 'avan-primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { SeatDemo } from './seatdemo';
import { ConfirmationDemo } from './confirmationdemo';
import { PersonalDemo } from './personaldemo';
import { PaymentDemo } from './paymentdemo';
import { ButtonModule } from 'avan-primeng/button';
import { CardModule } from 'avan-primeng/card';
import { DropdownModule } from 'avan-primeng/dropdown';
import { InputTextModule } from 'avan-primeng/inputtext';
import { InputMaskModule } from 'avan-primeng/inputmask';
import { CheckboxModule } from 'avan-primeng/checkbox';
import { ToastModule } from 'avan-primeng/toast';
import { FormsModule } from '@angular/forms';
import { TicketService } from './ticketservice';

@NgModule({
	imports: [
		CommonModule,
		StepsDemoRoutingModule,
        StepsModule,
		TabViewModule,
		AppCodeModule,
		AppDemoActionsModule,
		ButtonModule,
		CardModule,
		InputTextModule,
		DropdownModule,
		InputMaskModule,
		CheckboxModule,
		ToastModule,
		FormsModule
	],
	declarations: [
		StepsDemo,
		SeatDemo,
		ConfirmationDemo,
		PersonalDemo,
		PaymentDemo
	],
	providers: [
		TicketService
	]
})
export class StepsDemoModule {}
