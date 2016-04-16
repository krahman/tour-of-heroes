import {Component, OnInit} from 'angular2/core';
import {HeroService} from "./services/hero.service";
import {Hero} from "./models/hero.model";
import {Router} from "angular2/router";

@Component({
    selector: 'my-dashboard',
    templateUrl: 'app/dashboard.html'
})

export class DashboardComponent implements OnInit {
    heroes:Hero[] = [];

    constructor(private _heroService:HeroService,
                private _router:Router) {

    }

    ngOnInit() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes.slice(1,5));
    }

    gotoDetail(hero:Hero) {
        let link = ['HeroDetail', {id: hero.id}];
        console.log(link);
        this._router.navigate(link);
    }
}