import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppDocModule } from '../../layout/doc/app.doc.module';
import { AppCodeModule } from '../../layout/doc/code/app.code.component';
import { ImportDoc } from './importdoc';
import { DataTableDoc } from './datatabledoc';
import { DragDropModule } from 'avan-primeng/dragdrop';
import { TagModule } from 'avan-primeng/tag';
import { TableModule } from 'avan-primeng/table';
import { BasicDoc } from './basicdoc';
import { DropIndicatorDoc } from './dropindicatordoc';
import { PanelModule } from 'avan-primeng/panel';
import { DragHandleDoc } from './draghandledoc';
import { DraggableEventsDoc } from './draggableeventsdoc';
import { DraggablePropsDoc } from './draggablepropsdoc';
import { DroppableEventsDoc } from './droppableeventsdoc';
import { DroppablePropsDoc } from './droppablepropsdoc';

@NgModule({
    imports: [CommonModule, AppCodeModule, AppDocModule, DragDropModule, TableModule, TagModule, FormsModule, PanelModule],
    declarations: [BasicDoc, DataTableDoc, ImportDoc, DropIndicatorDoc, DragHandleDoc, DraggableEventsDoc, DraggablePropsDoc, DroppableEventsDoc, DroppablePropsDoc],
    exports: [AppDocModule]
})
export class DragDropDocModule {}
