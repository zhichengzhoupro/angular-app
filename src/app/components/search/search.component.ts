import { Component, OnInit } from '@angular/core';
import {StorageService} from '../../services/storage.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {mergeMap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  public searchKeyWord = '';

  public searchHistory: any[] = [];

  constructor(
    public  storageService: StorageService,
    public  httpClient: HttpClient
  ) {
    this.storageService = storageService;
  }

  ngOnInit(): void {
  }

  doSearch = () => {
    console.log(this.storageService.value);
    this.storageService.getCallbackDataByCallBack((data) => {
      console.log(data);
    });

    this.storageService.getPromiseData().then((data) => {
      console.log(data);
    });

    const stream = this.storageService.getObeservableData().subscribe((data) => {
      console.log(data);
    });

    setTimeout(() => {
      stream.unsubscribe();
    }, 1000);


    const stream2 = this.storageService.getOberseableMultipleExeData().subscribe((data) => {
      console.log(data);
    });

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

   callHttpGetChainedByPromise = async () => {
    console.log('get');
    const url = 'https://api.ratesapi.io/api/latest';
    const oldUrl2018 = 'https://api.ratesapi.io/api/2018-01-12';
    const oldUrl2019 = 'https://api.ratesapi.io/api/2019-01-12';
    const latestSub = await this.httpClient.get(url).toPromise();

    const Sub2018 = await this.httpClient.get(oldUrl2018).toPromise();
    const Sub2019 = await this.httpClient.get(oldUrl2019).toPromise();

    console.log('latestSub', latestSub);
    console.log('Sub2018', Sub2018);
  }
  callHttpGetChainedByRx =  () => {
    console.log('get');
    const url = 'https://api.ratesapi.io/api/latest';
    const oldUrl2018 = 'https://api.ratesapi.io/api/2018-01-12';
    const oldUrl2019 = 'https://api.ratesapi.io/api/2019-01-12';
  }

}
