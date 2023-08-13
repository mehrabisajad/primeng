import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule}  from '@angular/forms';
import {TreeDemo} from './treedemo';
import {TreeTemplatingDemo} from './treetemplatingdemo';
import {TreeSelectionDemo} from './treeselectiondemo';
import {TreeFilterDemo} from './treefilterdemo';
import {TreeScrollDemo} from './treescrolldemo';
import {TreeLazyDemo} from './treelazydemo';
import {TreeContextMenuDemo} from './treecontextmenudemo';
import {TreeDragDropDemo} from './treedragdropdemo';
import {TreeHorizontalDemo} from './treehorizontaldemo';
import {TreeDemoRoutingModule} from './treedemo-routing.module';
import {TreeModule} from 'avan-primeng/tree';
import {ToastModule} from 'avan-primeng/toast';
import {ButtonModule} from 'avan-primeng/button';
import {DialogModule} from 'avan-primeng/dialog';
import {ContextMenuModule} from 'avan-primeng/contextmenu';
import {TabViewModule} from 'avan-primeng/tabview';
import {AppCodeModule} from '../../app.code.component';
import {AppDemoActionsModule} from '../../app.demoactions.component';

@NgModule({
	imports: [
		CommonModule,
        FormsModule,
		TreeDemoRoutingModule,
        TreeModule,
        ToastModule,
        ButtonModule,
        DialogModule,
        ContextMenuModule,
        TabViewModule,
        AppCodeModule,
        AppDemoActionsModule
	],
	declarations: [
        TreeDemo,
        TreeTemplatingDemo,
        TreeSelectionDemo,
        TreeFilterDemo,
        TreeLazyDemo,
        TreeScrollDemo,
        TreeContextMenuDemo,
        TreeDragDropDemo,
        TreeHorizontalDemo
	]
})
export class TreeDemoModule {}
