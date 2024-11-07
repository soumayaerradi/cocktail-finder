import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-detail',
  templateUrl: './cocktail-detail.component.html',
  standalone: true,
  styleUrls: ['./cocktail-detail.component.scss'],
  imports: [
    RouterLink,
    NgIf,
  ],
})
export class CocktailDetailsComponent implements OnInit {
  cocktail: any;

  constructor(
    private route: ActivatedRoute,
    private cocktailService: CocktailService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.cocktailService.getCocktailDetails(id).subscribe({
        next: (res) => (this.cocktail = res.drinks[0]),
        error: (err) => console.error(err),
      });
    }
  }
}
