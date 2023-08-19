import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { FileUploadModule } from 'avan-primeng/fileupload';
import { ButtonModule } from 'avan-primeng/button';
import { ToastModule } from 'avan-primeng/toast';
import { TagModule } from 'avan-primeng/tag';
import { ProgressBarModule } from 'avan-primeng/progressbar';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';
import { TemplateDoc } from './templatedoc';
import { AutoDoc } from './autodoc';
import { AccessibilityDoc } from './accessibilitydoc';

@NgModule({
    imports: [CommonModule, FormsModule, AppCodeModule, AppDocModule, ButtonModule, TagModule, ProgressBarModule, ToastModule, FileUploadModule, RouterModule],
    exports: [AppDocModule],
    declarations: [ImportDoc, BasicDoc, TemplateDoc, StyleDoc, AdvancedDoc, AutoDoc, AccessibilityDoc]
})
export class FileUploadDocModule {}
