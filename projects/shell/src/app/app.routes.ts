import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    loadChildren: () =>
        loadRemoteModule({
            remoteEntry: 'http://localhost:3000/remoteEntry.js',
            remoteName: 'mfe1',
            exposedModule: './Module'
        })
        .then(m => m.FlightsModule)
  },
  {
    path: '**',
    component: NotFoundComponent
  }
];

