import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-infraon-oss',
  templateUrl: './infraon-oss.component.html',
  styleUrls: ['./infraon-oss.component.css']
})
export class InfraonOssComponent implements OnInit {

  prodName = "OSS";
  prodURL = "/infraon-oss"
  prodIcon = "./../../.../../../../../assets/img/homepage/product-icons/OSS.svg"
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
