import { Component, OnInit, Output, Input } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() isOpen: boolean;
  @Output() toggle = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

  tog() {
    this.toggle.emit();
  }

}
