import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-projects',
  templateUrl: './recent-projects.component.html',
  styleUrls: ['./recent-projects.component.css']
})
export class RecentProjectsComponent implements OnInit {
  pageTitle: string = 'Recent Projects';
  constructor() { }

  ngOnInit(): void {
  }

}
