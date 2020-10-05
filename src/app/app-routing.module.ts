import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'todolist',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'menu',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'courses',
    loadChildren: () => import('./pages/courses/courses.module').then( m => m.CoursesPageModule)
  },
  {
    path: 'rec',
    loadChildren: () => import('./pages/rec/rec.module').then( m => m.RecPageModule)
  },
  {
    path: 'camembert',
    loadChildren: () => import('./pages/camembert/camembert.module').then( m => m.CamembertPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
