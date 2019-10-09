import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Book } from '../data.modal';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
books:Book[]=[];
index:number;
sum:Book[]=[];
fin:number=0;
  constructor(private det:DataService,private route:ActivatedRoute) { }


  ngOnInit() {
    this.books=this.det.books;
 this.index =parseInt(this.route.snapshot.paramMap.get('id'));
this.sum=this.det.cart;
this.sum.forEach(element => {
  this.fin = this.fin + parseInt(element.price);
});
   

  }

}

  

