import { Component, OnInit } from '@angular/core';
import { CostsService } from './costs/costs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = '';

  constructor(private costsService: CostsService) { }

  ngOnInit() {
    this.getHome();
  }

  getHome() {
    this.costsService.getHome().subscribe(result => this.title = result.title);
  }

  getCosts() {
    this.costsService.getCosts().subscribe(result => this.title = result.title);
  }
}
