import { Routes } from '@angular/router';
import { CocktailDetailsComponent } from './components/cocktail-detail/cocktail-detail.component';
import { CocktailSearchComponent } from './components/cocktail-search/cocktail-search.component';

export const routes: Routes = [
  { path: '', component: CocktailSearchComponent },
  { path: 'cocktail/:id', component: CocktailDetailsComponent },
];
