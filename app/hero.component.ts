import {Component, OnInit} from 'angular2/core';
import {Hero} from "./models/hero.model.ts";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./services/hero.service";
import {Router} from "angular2/router";

@Component({
    selector: 'hero-app',
    templateUrl: 'app/hero.html',
    styleUrls: ['app/hero.component.css'],
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