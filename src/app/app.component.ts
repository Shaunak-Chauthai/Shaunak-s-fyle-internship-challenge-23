import { Component, OnInit, Input } from '@angular/core';
import { ApiService } from './services/api.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  [x: string]: any;
  repos: any[] = [];

  @Input() currentPage: number = 1; 
  @Input() totalPages: number = 1; 

  
  constructor(
    private apiService: ApiService
  ) {}

  //ngOnInit() {
   // this.apiService.getUser('johnpapa').subscribe(console.log);
 // }
}
