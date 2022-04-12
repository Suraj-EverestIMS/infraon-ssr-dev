import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-nccm',
  templateUrl: './infraon-nccm.component.html',
  styleUrls: ['./infraon-nccm.component.css']
})
export class InfraonNccmComponent implements OnInit {

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
