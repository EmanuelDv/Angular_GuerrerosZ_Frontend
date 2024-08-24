import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GuerreroListComponent } from './guerrero-list/guerrero-list.component';
import { GuerreroEditComponent } from './guerrero-edit/guerrero-edit.component';
import { GuerreroCreateComponent } from './guerrero-create/guerrero-create.component';
import { GuerreroDetailComponent } from './guerrero-detail/guerrero-detail.component';

const routes: Routes = [
  { path: '', component: GuerreroListComponent },
  { path: 'edit/:id', component: GuerreroEditComponent },
  { path: 'create', component: GuerreroCreateComponent },
  { path: 'detail/:id', component: GuerreroDetailComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
