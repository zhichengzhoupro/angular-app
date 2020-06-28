import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchKeyWord = '';

  public searchHistory: any[] = [];

  constructor(public  storageService: StorageService ) {
    this.storageService = storageService;
  }

  ngOnInit(): void {
  }

  doSearch = () => {
    console.log(this.storageService.value);
    if (!this.searchHistory.find(ele => ele === this.searchKeyWord)) {
      this.searchHistory.push(this.searchKeyWord);
    }
  }

  removeFromHistory = (index) => {
    this.searchHistory.splice(index, 1);
  }

  doAdd = (e)  => {
    if (e.code === 'Enter' && !this.searchHistory.find(ele => ele === this.searchKeyWord)) {
        this.searchHistory.push(this.searchKeyWord);
    }
  }
}
