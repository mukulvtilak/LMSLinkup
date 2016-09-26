import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Component({
  moduleId: module.id,
  selector: 'quick-sidebar',
  templateUrl: 'quick-sidebar.component.html',
  styleUrls: ['quick-sidebar.component.css'],
})
export class QuickSidebarComponent implements OnInit {

  constructor(
    private router: Router) { }

  ngOnInit(): void {
  }
}
