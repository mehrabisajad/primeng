import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'avan-primeng/button';
import { InputTextModule } from 'avan-primeng/inputtext';
import { DropdownModule } from 'avan-primeng/dropdown';
import { FocusTrapModule } from 'avan-primeng/focustrap';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { PropsDoc } from './propsdoc';

@NgModule({
    imports: [CommonModule, RouterModule, AppCodeModule, AppDocModule, FormsModule, ButtonModule, InputTextModule, DropdownModule, FocusTrapModule],
    declarations: [ImportDoc, BasicDoc, PropsDoc],
    exports: [AppDocModule]
})
export class FocusTrapDocModule {}
