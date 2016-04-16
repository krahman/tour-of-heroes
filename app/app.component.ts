import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroComponent} from './hero.component';
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "./services/hero.service";

@RouteConfig([
    {
        path: '/heroes',
        name: 'Heroes',
        component: HeroComponent
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: DashboardComponent,
        useAsDefault: true
    },
    {
        path: '/heroes/:id',
        name: 'HeroDetail',
        component: HeroDetailComponent
    }
])

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    styleUrls: ['app/app.component.css'],
    directives: [HeroComponent, ROUTER_DIRECTIVES],
    providers: [HeroService, ROUTER_PROVIDERS]
})

export class AppComponent {
    title = 'Tour of Heroes';
}