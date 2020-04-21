import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
    selector: 'app-characters',
    templateUrl: './characters.page.html',
    styleUrls: ['./characters.page.scss'],
})
export class CharactersPage implements OnInit {

    constructor(private navController: NavController, private router: Router) { }

    ngOnInit() {
    }
    openDetails() {
        // Both of these would work!
        // But the standard Router is recommended.
        // this.navController.navigateForward(`/tabs/films/42`);
        this.router.navigateByUrl(`tabs/characters/character-details`);
    }

    goToPlanets() {
        this.navController.navigateRoot(`/tabs/planets`)
    }

}
