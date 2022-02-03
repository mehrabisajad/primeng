import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from 'avan-primeng/card';
import { TabViewModule } from 'avan-primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { DockDemo } from './dockdemo';
import { DockDemoRoutingModule } from './dockdemo-routing.module';
import { DockModule } from 'avan-primeng/dock';
import { MenubarModule } from 'avan-primeng/menubar';
import { DialogModule } from 'avan-primeng/dialog';
import { ToastModule } from 'avan-primeng/toast';
import { GalleriaModule } from 'avan-primeng/galleria';
import { TerminalModule } from 'avan-primeng/terminal';
import { TreeModule } from 'avan-primeng/tree';

@NgModule({
	imports: [
		CommonModule,
		DockDemoRoutingModule,
		CardModule,
        DockModule,
		TabViewModule,
		AppCodeModule,
        MenubarModule,
        DialogModule,
        TerminalModule,
        TreeModule,
        ToastModule,
        GalleriaModule,
		AppDemoActionsModule
	],
	declarations: [
		DockDemo
	]
})
export class DockDemoModule {}
