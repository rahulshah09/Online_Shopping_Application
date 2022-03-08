import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent implements OnInit {

  productID=0;
  constructor( private activatedRoute : ActivatedRoute, private productservice : ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];

      this.productservice.deleteProduct(this.productID).subscribe(deleteddata=>{
        console.log("Product has been Deleted")
        alert("Product Deleted Successfully") 
      })
    });
  }
}
