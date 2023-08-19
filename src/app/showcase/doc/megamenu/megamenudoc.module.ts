import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDoc } from './importdoc';
import { BasicDoc } from './basicdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { VerticalDoc } from './verticaldoc';
import { MegaMenuModule } from 'avan-primeng/megamenu';
import { InputTextModule } from 'avan-primeng/inputtext';
import { ButtonModule } from 'avan-primeng/button';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, MegaMenuModule, InputTextModule, ButtonModule, AppDocModule],
    declarations: [BasicDoc, ImportDoc, StyleDoc, TemplateDoc, VerticalDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class MegaMenuDocModule {}
