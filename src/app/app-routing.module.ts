import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BasicComponent } from './layouts/basic/basic.component';
import { ContentComponent } from './modules/content/content.component';
import { CommonComponent } from './layouts/common/common.component';


const routes: Routes = [
  {
    path: '',
    component: BasicComponent,
    loadChildren: './modules/home/home.module#HomeModule'
  },
  {
    path: 'content',
    component: CommonComponent,
    loadChildren: './modules/content/content.module#ContentModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
