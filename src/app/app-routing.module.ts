import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TwoComponent } from '../app/two/two.component';
import { OneComponent } from '../app/one/one.component';
import { SigninComponent } from '../app/signin/signin.component';
const routes: Routes = [
  {  
    path: 'two',
    component: TwoComponent  
    },
   
    {  
      path: 'one',
      component: OneComponent  
      },
      {  
        path: 'signin',
        component: SigninComponent  
        }
    ];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
