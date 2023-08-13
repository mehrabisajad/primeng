import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AnimateDemo } from './animatedemo';
import { AnimateDemoRoutingModule } from './animate-routing.module';
import { AnimateModule } from 'avan-primeng/animate';
import { TabViewModule } from 'avan-primeng/tabview';
import { AppCodeModule } from '../../app.code.component';
import { AppDemoActionsModule } from '../../app.demoactions.component';

@NgModule({
    imports: [CommonModule, FormsModule, AnimateDemoRoutingModule, AnimateModule, TabViewModule, AppDemoActionsModule, AppCodeModule],
    declarations: [AnimateDemo]
})
export class AnimateDemoModule {}
