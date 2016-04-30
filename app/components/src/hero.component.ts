import {Component, OnInit} from 'angular2/core';
import {Hero} from "./../../models/hero.model.ts";
import {Router} from "angular2/router";

import {HeroDetailComponent} from "./hero-detail.component";
import {HeroService} from "../../services/hero.service";

@Component({
    selector: 'hero-app',
    templateUrl: './app/components/view/hero.html',
    styleUrls: ['./app/components/style/hero.component.css'],
    directives: [HeroDetailComponent],
    providers: [HeroService]

})

export class HeroComponent implements OnInit {

    selectedHero:Hero;
    heroes:Hero[];

    constructor(private _heroService:HeroService,
                private _router:Router) {
    };

    getHeroes() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }

    ngOnInit() {
        this.getHeroes();
    }

    onSelect(hero:Hero) {
        this.selectedHero = hero;
    }

    gotoDetail() {
        this._router.navigate(['HeroDetail', {id: this.selectedHero.id}]);
    }

}