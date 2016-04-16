import {Component, Input, OnInit} from 'angular2/core';
import {Hero} from "./models/hero.model";
import {HeroService} from "./services/hero.service";
import {RouteParams} from "angular2/router";


@Component({
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail.html',
    styleUrls: ['app/hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
    @Input()
    hero:Hero;

    constructor(private _heroService:HeroService,
                private _routeParams:RouteParams) {
    }

    ngOnInit() {
        let id = +this._routeParams.get('id');
        this._heroService.getHero(id)
            .then(hero => this.hero = hero);
    }

    goBack() {
        window.history.back();
    }

}