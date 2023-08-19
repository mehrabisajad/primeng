import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { DialogModule } from 'avan-primeng/dialog';
import { DockModule } from 'avan-primeng/dock';
import { GalleriaModule } from 'avan-primeng/galleria';
import { MenubarModule } from 'avan-primeng/menubar';
import { RadioButtonModule } from 'avan-primeng/radiobutton';
import { TerminalModule } from 'avan-primeng/terminal';
import { ToastModule } from 'avan-primeng/toast';
import { TreeModule } from 'avan-primeng/tree';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { AccessibilityDoc } from './accessibilitydoc';
import { AdvancedDoc } from './advanceddoc';
import { BasicDoc } from './basicdoc';
import { ImportDoc } from './importdoc';
import { StyleDoc } from './styledoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, RouterModule, DockModule, FormsModule, RadioButtonModule, MenubarModule, ToastModule, DialogModule, GalleriaModule, TerminalModule, TreeModule, AppDocModule],
    declarations: [AdvancedDoc, BasicDoc, ImportDoc, StyleDoc, AccessibilityDoc],
    exports: [AppDocModule]
})
export class DockDocModule {}
