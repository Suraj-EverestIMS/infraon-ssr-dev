import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-itsm',
  templateUrl: './infraon-itsm.component.html',
  styleUrls: ['./infraon-itsm.component.css']
})
export class InfraonItsmComponent implements OnInit {
  prodName = "ITSM";
  prodURL = "/infraon-itsm"
  prodIcon = "./../../.../../../../assets/img/homepage/product-icons/itsm.svg"
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
