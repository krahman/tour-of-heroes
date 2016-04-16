import {Component} from 'angular2/core';
import {HeroComponent} from './hero.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.html',
    directives: [HeroComponent]
})

export class AppComponent {
    title = 'Tour of Heroes';
}