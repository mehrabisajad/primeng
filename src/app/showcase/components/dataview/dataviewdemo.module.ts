import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {DataViewDemo} from './dataviewdemo';
import {DataViewDemoRoutingModule} from './dataviewdemo-routing.module';
import {DataViewModule} from 'avan-primeng/dataview';
import {PanelModule} from 'avan-primeng/panel';
import {InputTextModule} from 'avan-primeng/inputtext';
import {RatingModule} from 'avan-primeng/rating';
import {ButtonModule} from 'avan-primeng/button';
import {DropdownModule} from 'avan-primeng/dropdown';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
        CommonModule,
        FormsModule,
		DataViewDemoRoutingModule,
        DataViewModule,
        PanelModule,
        DropdownModule,
        TabViewModule,
        InputTextModule,
        RatingModule,
        ButtonModule,
        AppDemoActionsModule,
        AppCodeModule
	],
	declarations: [
		DataViewDemo
	]
})
export class DataViewDemoModule {}
