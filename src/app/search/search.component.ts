import { Component } from '@angular/core';
import { ApiService } from '../services/api.service';
import { catchError } from 'rxjs/operators';
import { Repository } from '../repository';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  username: string = '';
  repos: any[] = []; // Initialize an empty array to hold repositories
  currentPage: number = 1;
  repositoriesPerPage: number = 10;

  constructor(private apiService: ApiService) {}

  searchRepos() {
    this.apiService.getUserRepos(this.username, 1, 10)
      .pipe(
        catchError((error) => {
          console.error('API Error:', error);
          return [];
        })
      )
      .subscribe((repos: any) => {
        //console.log(repos);
        this.repos = repos;
        // Handle the list of repositories here
      });
  }

  loadRepos() {
    this.apiService.getUserRepos(this.username, this.currentPage, this.repositoriesPerPage)
      .subscribe((repos: Repository[]) => {
        this.repos = repos;
      });
  }

}
