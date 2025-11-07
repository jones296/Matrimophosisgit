import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-cart-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
  carts: any[] = [];

  constructor(private cartService: CartService) {}

  ngOnInit() {
    this.cartService.getCarts().subscribe((data: any) => {
      this.carts = data.carts;
    });
  }
}
