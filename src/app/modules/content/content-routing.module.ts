import { TestComponent } from './test/test.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProcessComponent } from './process/process.component';

const routes: Routes = [
  {
    path: 'processos',
    component: ProcessComponent,
    canActivate: []
  },
  {
    path: 'teste',
    component: TestComponent,
    canActivate: []
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContentRoutingModule { }
