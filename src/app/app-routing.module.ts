import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './pages/layouts/body/body.component';
import { NotFoundComponent } from './pages/404/404.component';
import { IndexComponent } from './pages/freelancer/index/index.component';
import { UpdateComponent } from './pages/freelancer/update/update.component';
import { AddComponent } from './pages/freelancer/add/add.component';


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
        component: AddComponent,
      },
      {
        path: 'update/:freelancer_id',
        component: UpdateComponent,
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
