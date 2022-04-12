import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-ims',
  templateUrl: './infraon-ims.component.html',
  styleUrls: ['./infraon-ims.component.css']
})
export class InfraonImsComponent implements OnInit {
  prodName = "IMS";
  prodURL = "/infraon-ims"
  prodIcon = "./../../.../../../../../assets/img/homepage/product-icons/ims.svg"
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
