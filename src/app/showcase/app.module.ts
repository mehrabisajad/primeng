import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';

import { AutoCompleteModule } from 'avan-primeng/autocomplete';
import { ButtonModule } from 'avan-primeng/button';
import { CalendarModule } from 'avan-primeng/calendar';
import { ChartModule } from 'avan-primeng/chart';
import { CheckboxModule } from 'avan-primeng/checkbox';
import { ChipModule } from 'avan-primeng/chip';
import { DropdownModule } from 'avan-primeng/dropdown';
import { InputMaskModule } from 'avan-primeng/inputmask';
import { InputNumberModule } from 'avan-primeng/inputnumber';
import { InputSwitchModule } from 'avan-primeng/inputswitch';
import { ListboxModule } from 'avan-primeng/listbox';
import { ProgressBarModule } from 'avan-primeng/progressbar';
import { RadioButtonModule } from 'avan-primeng/radiobutton';
import { SelectButtonModule } from 'avan-primeng/selectbutton';
import { SliderModule } from 'avan-primeng/slider';
import { TableModule } from 'avan-primeng/table';
import { TabMenuModule } from 'avan-primeng/tabmenu';
import { TooltipModule } from 'avan-primeng/tooltip';
import { TreeModule } from 'avan-primeng/tree';
import { AppComponent } from './app.component';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';

import { AppConfigService } from './service/appconfigservice';
import { CustomerService } from './service/customerservice';
import { IconService } from './service/iconservice';
import { JsonService } from './service/jsonservice';
import { PhotoService } from './service/photoservice';
import { ProductService } from './service/productservice';

import { BadgeModule } from 'avan-primeng/badge';
import { AppConfigComponent } from './app.config.component';
import { AppDemoActionsModule } from './app.demoactions.component';
import { AppFooterComponent } from './app.footer.component';
import { AppInputStyleSwitchModule } from './app.inputstyleswitch.component';
import { AppMainComponent } from './app.main.component';
import { AppMenuComponent } from './app.menu.component';
import { AppNewsComponent } from './app.news.component';
import { AppTopBarComponent } from './app.topbar.component';
import { LandingComponent } from './components/landing/landing.component';

@NgModule({
    declarations: [AppComponent, AppNewsComponent, AppTopBarComponent, AppMenuComponent, AppConfigComponent, AppFooterComponent, LandingComponent, AppMainComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        AutoCompleteModule,
        ButtonModule,
        BadgeModule,
        RadioButtonModule,
        InputSwitchModule,
        TooltipModule,
        AppInputStyleSwitchModule,
        AppDemoActionsModule,
        ChartModule,
        TabMenuModule,
        SliderModule,
        CalendarModule,
        TreeModule,
        ProgressBarModule,
        InputNumberModule,
        ChipModule,
        SelectButtonModule,
        TableModule,
        CheckboxModule,
        ListboxModule,
        InputMaskModule,
        DropdownModule
    ],
    providers: [{ provide: LocationStrategy, useClass: PathLocationStrategy }, CarService, CountryService, EventService, NodeService, IconService, CustomerService, PhotoService, JsonService, AppConfigService, ProductService],
    bootstrap: [AppComponent]
})
export class AppModule {}
