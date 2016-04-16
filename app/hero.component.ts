import {Component, OnInit} from 'angular2/core';
import {Hero} from "./models/hero.model.ts";
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from "./services/hero.service";

@Component({
    selector: 'hero-app',
    templateUrl: 'app/hero.html',
    directives: [HeroDetailComponent],
    providers: [HeroService]
})

export class HeroComponent implements OnInit{

    ngOnInit() {
        this.getHeroes();
    }

    constructor(private _heroService: HeroService) {};

    selectedHero: Hero;
    heroes: Hero[];

    onSelect(hero: Hero) {
        this.selectedHero = hero;
    }
    getHeroes() {
        this._heroService.getHeroes()
            .then(heroes => this.heroes = heroes);
    }
}