import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {GMapDemo} from './gmapdemo';
import {GMapDemoRoutingModule} from './gmapdemo-routing.module';
import {GMapModule} from 'avan-primeng/gmap';
import {ToastModule} from 'avan-primeng/toast';
import {CheckboxModule} from 'avan-primeng/checkbox';
import {DialogModule} from 'avan-primeng/dialog';
import {InputTextModule} from 'avan-primeng/inputtext';
import {ButtonModule} from 'avan-primeng/button';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		GMapDemoRoutingModule,
        GMapModule,
        ToastModule,
        InputTextModule,
        CheckboxModule,
        DialogModule,
        ButtonModule,
        TabViewModule,
        AppCodeModule,
        AppDemoActionsModule
	],
	declarations: [
		GMapDemo
	]
})
export class GMapDemoModule {}
