import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CollectionListComponent } from './components/collection-list/collection-list.component';
import { ElementListComponent } from './components/element-list/element-list.component';
import { CreateElementComponent } from './components/create-element/create-element.component';
import { NewComponentComponent } from './components/new-component/new-component.component';

const routes: Routes = [
  {
    path: 'collections',
    component: CollectionListComponent
  },
  {
    path: 'elements',
    component: ElementListComponent
  },
  {
    path: 'elements/new',
    component: CreateElementComponent
  },
  {
    path: 'elements/:id',
    component: CreateElementComponent
  },
  {
    path: '',
    redirectTo: '/collections',
    pathMatch: 'full'
  },
  {
    path:'elements/seminar',
    component: NewComponentComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
