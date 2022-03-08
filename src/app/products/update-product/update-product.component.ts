import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-update-product',
  templateUrl: './update-product.component.html',
  styleUrls: ['./update-product.component.css']
})
export class UpdateProductComponent implements OnInit {

  productID=0;
  productDetails: Product|any;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data=>{
      this.productID = data['id'];

      this.productService.viewProductbyId(this.productID).subscribe(productData=>{
        this.productDetails=productData;
        console.log(this.productDetails);
      });
    });
  }

  updateProduct(form : any){
    const updateProduct={
      id:form.value.id,
      categoryId:form.value.categoryId,
      productName: form.value.productName,
      description: form.value.description,
      rating: form.value.product_rating,
      price: form.value.product_price,
      productImg: '',
      isAvailable: 1,
      color: form.value.product_color,
      reviews: form.value.product_category,
    };
    
    console.log(form);
    this.productService.updateProduct(this.productID, updateProduct).subscribe(data=>{
      console.log(data)
      alert("Product Updated Successfully") 
    });
  }

}
