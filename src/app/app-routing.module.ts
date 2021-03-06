import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MoviesSearchFormComponent } from './movies-search-form/movies-search-form.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

const routes: Routes = [
  { path: 'movies-search', component: MoviesSearchFormComponent},
  { path: 'movies-list', component: MoviesListComponent},
  { path: 'movie-detail/:id', component: MovieDetailComponent},
  { path: '', redirectTo: '/movies-search', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
