import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() childData: any[];
  @Output() childAction = new EventEmitter<any>();

  sendParent(data) {
    console.log('Child Clicked');
    this.childAction.emit(data);
  }

  constructor() { }

  ngOnInit() {
  }

}
