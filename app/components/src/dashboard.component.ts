import {Component, OnInit} from 'angular2/core';
import {Hero} from "./../../models/hero.model.ts";
import {Router} from "angular2/router";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'my-dashboard',
    templateUrl: './app/components/view/dashboard.html',
    styleUrls: ['./app/components/style/dashboard.component.css']
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
        this._router.navigate(link);
    }
}