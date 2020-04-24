import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxChildProcessModule } from 'ngx-childprocess';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BasicComponent } from './layouts/basic/basic.component';

@NgModule({
   declarations: [
      AppComponent,
      BasicComponent
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      NgxChildProcessModule
   ],
   providers: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
