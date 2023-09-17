import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/layouts/body/body.component';
import { NotFoundComponent } from './pages/404/404.component';
import { IndexComponent } from './pages/freelancer/index/index.component';

const routes: Routes = [
  {
    path: '',
    component: BodyComponent,
    children: [
      {
        path: '',
        component: IndexComponent,
      },
      {
        path: 'add',
        component: IndexComponent,
      },
      {
        path: 'update/:freelancer_id',
        component: IndexComponent,
      },
    ],
  },
  {
    path: '**',
    component: BodyComponent,
    children: [
      {
        path: '',
        component: NotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
