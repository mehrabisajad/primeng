import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BadgeModule } from 'avan-primeng/badge';
import { ButtonModule } from 'avan-primeng/button';
import { CalendarModule } from 'avan-primeng/calendar';
import { ChartModule } from 'avan-primeng/chart';
import { CheckboxModule } from 'avan-primeng/checkbox';
import { ChipModule } from 'avan-primeng/chip';
import { DropdownModule } from 'avan-primeng/dropdown';
import { InputNumberModule } from 'avan-primeng/inputnumber';
import { InputSwitchModule } from 'avan-primeng/inputswitch';
import { ListboxModule } from 'avan-primeng/listbox';
import { ProgressBarModule } from 'avan-primeng/progressbar';
import { RadioButtonModule } from 'avan-primeng/radiobutton';
import { SelectButtonModule } from 'avan-primeng/selectbutton';
import { SidebarModule } from 'avan-primeng/sidebar';
import { SliderModule } from 'avan-primeng/slider';
import { TableModule } from 'avan-primeng/table';
import { TabMenuModule } from 'avan-primeng/tabmenu';
import { TreeModule } from 'avan-primeng/tree';
import { AppNewsModule } from '../../layout/news/app.news.module';
import { LandingComponent } from './landing.component';

@NgModule({
    imports: [
        CommonModule,
        NgOptimizedImage,
        FormsModule,
        SidebarModule,
        InputSwitchModule,
        ButtonModule,
        RadioButtonModule,
        InputNumberModule,
        TabMenuModule,
        ChartModule,
        ProgressBarModule,
        TreeModule,
        ChipModule,
        SelectButtonModule,
        SliderModule,
        BadgeModule,
        CalendarModule,
        TableModule,
        DropdownModule,
        ListboxModule,
        RouterModule,
        CheckboxModule,
        AppNewsModule
    ],
    exports: [LandingComponent],
    declarations: [LandingComponent]
})
export class LandingModule {}
