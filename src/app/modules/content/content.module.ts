import { CustomChartComponent } from './../../layouts/components/custom-chart/custom-chart.component';
import { TestComponent } from './test/test.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ProcessComponent } from './process/process.component';
import { ContentComponent } from './content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { NgxChartsModule } from '@swimlane/ngx-charts';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatStepperModule,
    MatProgressSpinnerModule,
    NgxChartsModule
  ],
  declarations: [
    ContentComponent,
    ProcessComponent,
    TestComponent,
    CustomChartComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContentModule { }
