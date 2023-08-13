import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TableDemo } from './tabledemo';
import { TableBasicDemo } from './tablebasicdemo';
import { TableDynamicDemo } from './tabledynamicdemo';
import { TableTemplatingDemo } from './tabletemplatingdemo';
import { TableSizeDemo } from './tablesizedemo';
import { TableGridLinesDemo } from './tablegridlinesdemo';
import { TableStripedDemo } from './tablestripeddemo';
import { TablePageDemo } from './tablepagedemo';
import { TableSortDemo } from './tablesortdemo';
import { TableSelectionDemo } from './tableselectiondemo';
import { TableFilterDemo } from './tablefilterdemo';
import { TableStyleDemo } from './tablestyledemo';
import { TableLazyDemo } from './tablelazydemo';
import { TableExportDemo } from './tableexportdemo';
import { TableColGroupDemo } from './tablecolgroupdemo';
import { TableRowExpansionDemo } from './tablerowexpansiondemo';
import { TableScrollDemo } from './tablescrolldemo';
import { TableVirtualScrollDemo } from './tablevirtualscrolldemo';
import { TableFlexScrollDemo } from './tableflexscrolldemo';
import { TableColToggleDemo } from './tablecoltoggledemo';
import { TableCrudDemo } from './tablecruddemo';
import { TableResponsiveDemo } from './tableresponsivedemo';
import { TableContextMenuDemo } from './tablecontextmenudemo';
import { TableColResizeDemo } from './tablecolresizedemo';
import { TableReorderDemo } from './tablereorderdemo';
import { TableEditDemo } from './tableeditdemo';
import { TableStateDemo } from './tablestatedemo';
import { TableStickyDemo } from './tablestickydemo';
import { TableRowGroupDemo } from './tablerowgroupdemo';
import { TableDemoRoutingModule } from './tabledemo-routing.module';
import { TableModule } from 'avan-primeng/table';
import { SliderModule } from 'avan-primeng/slider';
import { MultiSelectModule } from 'avan-primeng/multiselect';
import { ContextMenuModule } from 'avan-primeng/contextmenu';
import { ToastModule } from 'avan-primeng/toast';
import { ButtonModule } from 'avan-primeng/button';
import { CalendarModule } from 'avan-primeng/calendar';
import { DialogModule } from 'avan-primeng/dialog';
import { ConfirmDialogModule } from 'avan-primeng/confirmdialog';
import { RatingModule } from 'avan-primeng/rating';
import { DropdownModule } from 'avan-primeng/dropdown';
import { InputTextModule } from 'avan-primeng/inputtext';
import { InputNumberModule } from 'avan-primeng/inputnumber';
import { InputTextareaModule } from 'avan-primeng/inputtextarea';
import { ProgressBarModule } from 'avan-primeng/progressbar';
import { TooltipModule } from 'avan-primeng/tooltip';
import { RadioButtonModule } from 'avan-primeng/radiobutton';
import { ToolbarModule } from 'avan-primeng/toolbar';
import { FileUploadModule } from 'avan-primeng/fileupload';
import { TabViewModule } from 'avan-primeng/tabview';
import { ToggleButtonModule } from 'avan-primeng/togglebutton';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';
import { SkeletonModule } from 'avan-primeng/skeleton';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		TableDemoRoutingModule,
        TableModule,
        CalendarModule,
		SliderModule,
        DialogModule,
        ConfirmDialogModule,
		MultiSelectModule,
		ContextMenuModule,
		DropdownModule,
		ButtonModule,
		ToastModule,
        InputTextModule,
        InputNumberModule,
        InputTextareaModule,
        ProgressBarModule,
        TooltipModule,
        RadioButtonModule,
        ToolbarModule,
        FileUploadModule,
        TabViewModule,
        ToggleButtonModule,
        RatingModule,
        SkeletonModule,
        AppCodeModule,
		AppDemoActionsModule
	],
	declarations: [
		TableDemo,
		TableBasicDemo,
		TableDynamicDemo,
        TableTemplatingDemo,
        TableSizeDemo,
        TableGridLinesDemo,
        TableStripedDemo,
		TablePageDemo,
		TableSortDemo,
		TableSelectionDemo,
		TableFilterDemo,
		TableStyleDemo,
		TableLazyDemo,
		TableExportDemo,
		TableColGroupDemo,
		TableRowExpansionDemo,
        TableScrollDemo,
        TableVirtualScrollDemo,
        TableFlexScrollDemo,
		TableColToggleDemo,
		TableCrudDemo,
		TableResponsiveDemo,
		TableContextMenuDemo,
		TableColResizeDemo,
		TableReorderDemo,
		TableEditDemo,
        TableRowGroupDemo,
        TableStateDemo,
        TableStickyDemo
	]
})
export class TableDemoModule { }
