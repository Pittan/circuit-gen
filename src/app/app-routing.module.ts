import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ComposeComponent } from './compose/compose.component';
import { PreviewComponent } from './preview/preview.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'compose',
    pathMatch: 'full'
  },
  {
    path: 'compose',
    component: ComposeComponent
  },
  {
    path: 'preview',
    component: PreviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
