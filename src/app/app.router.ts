import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SidebarComponent } from './components/sidebar/sidebar.component';

export const router: Routes = [
    {
        path: 'home',
        loadChildren: './components/modules/home/home.module#HomeModule',
        pathMatch: 'full'
    },
    // {
    //     path: 'gallery',
    //     loadChildren: 'app/components/gallery/gallery.module#GalleryModule'
    // },
    // {
    //     path: 'about',
    //     loadChildren: 'app/components/about/about.module#AboutModule'
    // }
    {
        path: 'side',
        component:SidebarComponent
    }
];

export const appRouter: ModuleWithProviders = RouterModule.forRoot(router);