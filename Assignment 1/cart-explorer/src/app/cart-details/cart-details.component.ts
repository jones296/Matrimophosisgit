import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';
import { CommonModule } from '@angular/common';
import { DiscountPipe } from '../discount.pipe';

@Component({
  selector: 'app-cart-details',
  standalone: true,
  imports: [CommonModule, DiscountPipe],
  templateUrl: './cart-details.component.html',
  styleUrls: ['./cart-details.component.css'],
})
export class CartDetailsComponent implements OnInit {
  cart: any;

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.cartService.getCartById(id).subscribe((data) => {
      this.cart = data;
    });
  }
}
