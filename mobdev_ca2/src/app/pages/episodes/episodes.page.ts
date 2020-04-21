import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
@Component({
  selector: 'app-episodes',
  templateUrl: './episodes.page.html',
  styleUrls: ['./episodes.page.scss'],
})
export class EpisodesPage implements OnInit {

  constructor(private navController: NavController, private router: Router) { }

  ngOnInit() {
  }
openDetails() {
        // Both of these would work!
        // But the standard Router is recommended.
        // this.navController.navigateForward(`/tabs/films/42`);
        this.router.navigateByUrl(`tabs/episodes/episode-details`);
    }
}
