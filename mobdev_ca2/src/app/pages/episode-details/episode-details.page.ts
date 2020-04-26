// import { ApiService } from './../../services/api.service';
// import { Component, OnInit } from '@angular/core';
// import { ActivatedRoute } from '@angular/router';
// @Component({
//   selector: 'app-episode-details',
//   templateUrl: './episode-details.page.html',
//   styleUrls: ['./episode-details.page.scss'],
// })
// export class EpisodeDetailsPage implements OnInit {
//   episode: any;
//   episodeId = null;
//   constructor(private activatedRoute: ActivatedRoute, private api: ApiService) {}
//   ngOnInit() {
//     this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
//     this.api.getEpisode(this.episodeId).subscribe(res => {
//       this.episode = res[0];
//     })
//     }
// }


	
import { FavouriteService } from './../../services/favourite.service';
import { ApiService } from './../../services/api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 
@Component({
  selector: 'app-episode-details',
  templateUrl: './episode-details.page.html',
  styleUrls: ['./episode-details.page.scss']
})
export class EpisodeDetailsPage implements OnInit {
 
 episode: any;
  isFavourite = false;
 episodeId = null;
 
  constructor(private activatedRoute: ActivatedRoute, private api: ApiService, private favouriteService: FavouriteService) { }
 
  ngOnInit() {
    this.episodeId = this.activatedRoute.snapshot.paramMap.get('id');
    this.api.getEpisode(this.episodeId).subscribe(res => {
      this.episode = res[0];
    });
 
    this.favouriteService.isFavourite(this.episodeId).then(isFav => {
      this.isFavourite = isFav;
    });
  }
 
  favouriteEpisod() {
    this.favouriteService.favouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = true;
    });
  }
 
  unfavouriteEpisod() {
    this.favouriteService.unfavouriteEpisode(this.episodeId).then(() => {
      this.isFavourite = false;
    });
  }
 
}