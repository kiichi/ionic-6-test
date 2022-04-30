import { Component } from '@angular/core';
import { Code, DataService } from '../services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  codes:Code[];
  constructor(private data: DataService) {
  }
  private search:string;

  doSearch(inSearch:string){
    this.codes = this.data.getCodes(inSearch);
  }

  // getCodes(inSearch:string): Code[] {
  //   return this.data.getCodes(inSearch);
  // }
}
