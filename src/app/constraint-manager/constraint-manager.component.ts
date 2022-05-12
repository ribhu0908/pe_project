import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-constraint-manager',
  templateUrl: './constraint-manager.component.html',
  styleUrls: ['./constraint-manager.component.css']
})
export class ConstraintManagerComponent implements OnInit {

  complaintDetails = {
    heading: '',
    description: '',
    addLine1: '',
    addLine2: '',
    district: '',
    pin: '',
    state:'',
    progressLevel: 1,
    progressDescription: '',
  };
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){

  }

}
