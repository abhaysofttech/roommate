import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-amenities-details',
  templateUrl: './amenities-details.page.html',
  styleUrls: ['./amenities-details.page.scss'],
})
export class AmenitiesDetailsPage implements OnInit {
  amenitiesDetail:FormGroup;
  loading = false;
  submitted = false;

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
  constructor(
    private formBuilder: FormBuilder

  ) { }

  ngOnInit() {
    this.amenitiesDetail = this.formBuilder.group({
      waterSupply: ['', Validators.required],
      appartType: ['', Validators.required],
      bhkType: ['', Validators.required],
      gatedSecurity: ['', Validators.required],
      vegNonveg: ['', Validators.required],
      bathroom: ['', Validators.required],
      balcony: ['', Validators.required],
      cupboard: ['', Validators.required],
      // otherAmeni: ['', Validators.required],

    });
  }
  
  onSubmit() {
    this.submitted = true;

    if (this.amenitiesDetail.invalid) {
      return;
    }
    console.log(this.amenitiesDetail.value);

  
}
}

