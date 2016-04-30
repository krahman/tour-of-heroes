import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {HeroComponent} from "./hero.component";
import {DashboardComponent} from "./dashboard.component";
import {HeroDetailComponent} from "./hero-detail.component";


@Component({
    selector: 'my-heroes',
    templateUrl: './app/components/view/heroes.html',
    directives: [HeroComponent, ROUTER_DIRECTIVES]
})

export class HeroesComponent {
}