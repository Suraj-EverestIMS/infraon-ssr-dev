import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-nms',
  templateUrl: './infraon-nms.component.html',
  styleUrls: ['./infraon-nms.component.css']
})
export class InfraonNmsComponent implements OnInit {
  prodName = "NMS";
  prodURL = "/infraon-nms"
  prodIcon = "./../../.../../../../assets/img/homepage/product-icons/NMS.svg"
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
