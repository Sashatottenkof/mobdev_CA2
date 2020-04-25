import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';	
import { Observable } from 'rxjs';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.page.html',
  styleUrls: ['./character-details.page.scss'],
})
export class CharacterDetailsPage implements OnInit {
characters: Observable<any>;
    constructor(private router: Router, private api: ApiService) { }

  ngOnInit() {
  }

}
