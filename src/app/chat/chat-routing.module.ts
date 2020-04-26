import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from '../auth/helpers/auth.guard';


const chatRoutes: Routes = [
  {
    path: 'chat', component: HomeComponent, canActivate: [AuthGuard]
  }
];


@NgModule({
  imports: [
    RouterModule.forChild(chatRoutes),
  ],
  exports: [
    RouterModule,
  ]
})
export class ChatRoutingModule { }
