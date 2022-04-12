import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-infinity',
  templateUrl: './infraon-infinity.component.html',
  styleUrls: ['./infraon-infinity.component.css']
})
export class InfraonInfinityComponent implements OnInit {
  prodName = "Infinity";
  prodURL = "/infraon-infinity"
  prodIcon = "./../../.../../../../assets/img/homepage/product-icons/infinity-support-logo.svg"
  dataObj!: object;

  constructor() {
    this.dataObj = {
      "name" : this.prodName,
      "url" : this.prodURL,
      "img" : this.prodIcon
    }
  }
  ngOnInit(): void {
  }

}
