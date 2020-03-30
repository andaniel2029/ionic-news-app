import { Component, OnDestroy } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnDestroy {

  articles;

  constructor(private apiService: ApiService) { }

  ionViewDidEnter() {

    this.apiService.getNews().subscribe((data) => {
      // console.log(data);
      this.articles = data['articles'];
    });
  }

  ionViewDidLeave() {
    console.log('home page leave event');
  }

  ngOnDestroy() {
    console.log('home page destroy event');
  }
}
