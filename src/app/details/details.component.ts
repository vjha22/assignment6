import { Component, OnInit } from '@angular/core';

import { Book } from '../data.modal';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
 books:Book[]=[];
 index:number;
 cur:Book;


  constructor(private det:DataService,private route:ActivatedRoute) { }

  ngOnInit() {
  this.books=this.det.books;
 this.index =parseInt(this.route.snapshot.paramMap.get('id'));
this.books.forEach(element => {
  if(this.index==element.id){
   this.cur=element;
  }

 });
 
}
add(){
  this.det.cart.push(this.det.books[this.index]);
  console.log(this.det.cart);

}


}
