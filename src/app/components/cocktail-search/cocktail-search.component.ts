import { NgForOf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CocktailService } from '../../services/cocktail.service';

@Component({
  selector: 'app-cocktail-search',
  templateUrl: './cocktail-search.component.html',
  standalone: true,
  styleUrls: ['./cocktail-search.component.scss'],
  imports: [
    FormsModule,
    NgForOf,
  ],
})
export class CocktailSearchComponent implements OnInit {
  cocktails: any[] = [];
  query = '';

  constructor(
    private cocktailService: CocktailService,
    private router: Router
  ) {}

  ngOnInit() {
    this.cocktailService.getDefaultCocktailList().subscribe({
      next: (res) => (this.cocktails = res.drinks || []),
      error: (err) => console.error(err),
    });
  }

  searchCocktails() {
    if (this.query.trim()) {
      this.cocktailService.searchCocktails(this.query).subscribe({
        next: (res) => (this.cocktails = res.drinks || []),
        error: (err) => console.error(err),
      });
    }
  }

  viewDetails(id: string) {
    this.router.navigate(['/cocktail', id]);
  }
}
