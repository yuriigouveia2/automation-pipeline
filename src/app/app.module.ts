import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChildProcessModule } from 'ngx-childprocess';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './layouts/basic/basic.component';
import { SidebarComponent } from './layouts/components/sidebar/sidebar.component';
import { ContentComponent } from './modules/content/content.component';
import { CommonComponent } from './layouts/common/common.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
   declarations: [
      AppComponent,
      BasicComponent,
      SidebarComponent,
      CommonComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgxChildProcessModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MatProgressSpinnerModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
