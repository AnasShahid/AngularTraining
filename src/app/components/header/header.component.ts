import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() title:string = '';
  @Output() onMenuButtonClick = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }

  menuButtonClick(){
    this.onMenuButtonClick.emit();
  }

}
