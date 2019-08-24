import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterExtService } from './routerService';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private router: Router, private routerService: RouterExtService) { }
  value: string;
  events: string[] = [];
  opened: boolean;
  navigate(url) {
    this.router.navigate([url]);
  }
}
