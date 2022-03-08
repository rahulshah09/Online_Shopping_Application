import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/site-layout/category';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-view-productby-category',
  templateUrl: './view-productby-category.component.html',
  styleUrls: ['./view-productby-category.component.css']
})
export class ViewProductbyCategoryComponent implements OnInit {
searchCategory:Category|any;
productList :Product|any;

  constructor(private activatedRoute:ActivatedRoute, private productservice: ProductService ) {
    

 
this.activatedRoute.paramMap.subscribe(params => { 
  this.productservice.searchCategoryProduct(params.get('id')?.toString()).subscribe(categoryData=>{
           this.productList = categoryData;
         })
});
  //   this.activatedRoute.queryParams.subscribe(data =>{
  //     this.searchCategory =data['id'];
  //     debugger;
  //     this.productservice.searchCategoryProduct(this.searchCategory).subscribe(categoryData=>{
  //       this.productList = categoryData;
  //     })
  //   })
  //  }
}

  ngOnInit(): void {
    
  } 

}
