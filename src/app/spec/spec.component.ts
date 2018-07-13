import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-spec',
  templateUrl: './spec.component.html',
  styleUrls: ['./spec.component.css']
})
export class SpecComponent implements OnInit {

  selectedId: string;

  constructor(route: ActivatedRoute) {
    this.selectedId = route.snapshot.params['id'];
  }

  ngOnInit() {
  }

}
