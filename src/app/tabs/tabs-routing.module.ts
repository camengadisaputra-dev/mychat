import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'chat',
        loadChildren: () => import('../chat/chat.module').then( m => m.ChatPageModule)
      },
      {
        path: 'status',
        loadChildren: () => import('../status/status.module').then( m => m.StatusPageModule)
      },
      {
        path: '',
        redirectTo: '/tabs/chat',
        pathMatch: 'full'
      },
      {
        path: 'contacts',
        loadChildren: () => import('../contacts/contacts.module').then( m => m.ContactsPageModule)
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
