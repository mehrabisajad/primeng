import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'avan-primeng/button';
import { InputSwitchModule } from 'avan-primeng/inputswitch';
import { RadioButtonModule } from 'avan-primeng/radiobutton';
import { SidebarModule } from 'avan-primeng/sidebar';
import { AppConfigComponent } from './app.config.component';

@NgModule({
    imports: [CommonModule, FormsModule, SidebarModule, InputSwitchModule, ButtonModule, RadioButtonModule],
    exports: [AppConfigComponent],
    declarations: [AppConfigComponent]
})
export class AppConfigModule {}
