import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {RegisterComponent} from "./register/register.component";
import {TestComponent} from "./test/test.component";

const routes: Routes = [
  // { path: '', pathMatch: 'full', redirectTo: '/welcome' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'register', component: RegisterComponent},
  { path: 'test', component: TestComponent}
];
//loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule)
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
