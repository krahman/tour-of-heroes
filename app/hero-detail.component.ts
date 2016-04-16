import {Component, Input} from 'angular2/core';
import {Hero} from "./models/hero.model";

@Component({
    selector: 'hero-detail',
    templateUrl: 'app/hero-detail.html'
})

export class HeroDetailComponent {
    @Input()
    hero: Hero;
}