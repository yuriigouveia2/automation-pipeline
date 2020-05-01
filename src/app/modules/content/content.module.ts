import { TestComponent } from './test/test.component';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentRoutingModule } from './content-routing.module';
import { ProcessComponent } from './process/process.component';
import { ContentComponent } from './content.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    ContentRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ContentComponent,
    ProcessComponent,
    TestComponent
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class ContentModule { }
