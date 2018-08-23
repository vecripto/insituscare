import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { NewsComponent } from './home/news/news.component';
import { ServicesComponent } from './services/services.component';

const routingConfig: Routes = [
    { path: 'home/news', component: NewsComponent },
    { path: 'home', component: HomeComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', component: HomeComponent }
];

export const AppRoutes = RouterModule.forRoot(
    routingConfig,
    { enableTracing: true }
);
