import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TypographyComponent } from './components/typography/typography.component';
import { ButtonComponent } from './components/button/button.component';
import { IconComponent } from './components/icon/icon.component';
import { BadgeComponent } from './components/badge/badge.component';
import { SpinnerComponent } from './components/spinner/spinner.component';


const routes: Routes = [
  { path: 'typography', component: TypographyComponent },
  { path: 'button', component: ButtonComponent },
  { path: 'icon', component: IconComponent },
  { path: 'badge', component: BadgeComponent },
  { path: 'spinner', component: SpinnerComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
