import { Component, OnInit } from '@angular/core';
import { ProductListComponentService } from './product-list.component.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  objetoApi: any;
  listaLivros = [];

  constructor(private bookService: ProductListComponentService) { }

  ngOnInit(): void {
    this.objetoApi = this.bookService.getBook().subscribe(data => {
      this.objetoApi = data;
      this.listaLivros = this.objetoApi.books;

  })

  }

}
