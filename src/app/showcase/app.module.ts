import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, PathLocationStrategy } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { ButtonModule } from 'avan-primeng/button';
import { TooltipModule } from 'avan-primeng/tooltip';
import { RadioButtonModule } from 'avan-primeng/radiobutton';
import { AutoCompleteModule } from 'avan-primeng/autocomplete';
import { InputSwitchModule } from 'avan-primeng/inputswitch';
import { ChartModule } from 'avan-primeng/chart';
import { TabMenuModule } from 'avan-primeng/tabmenu';
import { SliderModule } from 'avan-primeng/slider';
import { CalendarModule } from 'avan-primeng/calendar';
import { TreeModule } from 'avan-primeng/tree';
import { ProgressBarModule } from 'avan-primeng/progressbar';
import { InputNumberModule } from 'avan-primeng/inputnumber';
import { ChipModule } from 'avan-primeng/chip';
import { SelectButtonModule } from 'avan-primeng/selectbutton';
import { TableModule } from 'avan-primeng/table';
import { CheckboxModule } from 'avan-primeng/checkbox';
import { ListboxModule } from 'avan-primeng/listbox';
import { InputMaskModule } from '../components/inputmask/inputmask';
import { DropdownModule } from 'avan-primeng/dropdown';

import { CarService } from './service/carservice';
import { CountryService } from './service/countryservice';
import { EventService } from './service/eventservice';
import { NodeService } from './service/nodeservice';

import { IconService } from './service/iconservice';
import { CustomerService } from './service/customerservice';
import { PhotoService } from './service/photoservice';
import { JsonService } from './service/jsonservice';
import { AppConfigService } from './service/appconfigservice';
import { ProductService } from './service/productservice';

import { AppNewsComponent } from './app.news.component';
import { AppTopBarComponent } from './app.topbar.component';
import { AppMenuComponent } from './app.menu.component';
import { AppConfigComponent } from './app.config.component';
import { AppFooterComponent } from './app.footer.component';
import { AppInputStyleSwitchModule } from './app.inputstyleswitch.component';
import { AppDemoActionsModule } from './app.demoactions.component';
import { BadgeModule } from 'avan-primeng/badge';
import { LandingComponent } from './components/landing/landing.component';
import { AppMainComponent } from './app.main.component';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AppNewsComponent,
        AppTopBarComponent,
        AppMenuComponent,
        AppConfigComponent,
        AppFooterComponent,
        LandingComponent,
        AppMainComponent
    ],
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
    providers: [
        { provide: LocationStrategy, useClass: PathLocationStrategy },
        CarService,CountryService,EventService,NodeService,IconService,CustomerService,PhotoService,JsonService,AppConfigService, ProductService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
