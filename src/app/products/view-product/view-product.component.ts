import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent implements OnInit {
productID=0;
productData: Product|any;
  constructor(private activatedRoute: ActivatedRoute, private productservice: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];
    })
    this.productservice.viewProductbyId(this.productID).subscribe(viewData=>{
      this.productData=viewData;
    })
  }

}
