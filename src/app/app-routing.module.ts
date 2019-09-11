import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';


const routes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'button', component: ButtonComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
