import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {
  bedRoom:any = [
    { val: 'Pepperoni', isChecked: true },
    { val: 'Sausage', isChecked: false },
    { val: 'Mushroom', isChecked: false }
  ];
  constructor() { }

  ngOnInit() {
  }
  selectBedroom(data){
    let update = this.bedRoom.filter(function (item) { return item.val == data.val })
    update[0].isChecked = !update[0].isChecked ;
  }

}
