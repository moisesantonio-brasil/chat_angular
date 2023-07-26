import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NotifComponent } from './components/notif/notif.component';
import { PerfilComponent } from './components/perfil/perfil.component';


const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'notif',component: NotifComponent},
  {path:'perfil',component: PerfilComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
