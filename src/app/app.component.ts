import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs";
import {DataService} from "./services/data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  posts$: Observable<any[]>

  constructor(private dataService : DataService) {
  }

  ngOnInit() {
    this.posts$ = this.dataService.getPosts()
  }
}
