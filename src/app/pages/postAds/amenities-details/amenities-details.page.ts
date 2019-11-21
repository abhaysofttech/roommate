import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.page.html',
  styleUrls: ['./amenities-details.page.scss'],
})
export class AmenitiesDetailsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public form = [
    { val: 'Air-Conditioner', isChecked: true },
    { val: 'Club', isChecked: false },
    { val: 'Playground', isChecked: false },
    { val: 'Gas', isChecked: false },
    { val: 'Sewage', isChecked: false },
    { val: 'Power backup', isChecked: false },
    { val: 'Lift', isChecked: false },
    { val: 'House keeper', isChecked: false },
    { val: 'Security', isChecked: false },
    { val: 'Car Parking', isChecked: false },
    { val: 'Two-Wheeler Parking', isChecked: false },
    { val: 'Swimming Pool', isChecked: false },
    { val: 'Internet Connectivity', isChecked: false },
  ];
}
