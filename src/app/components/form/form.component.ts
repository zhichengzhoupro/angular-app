import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  public peopleInfo: any = {
    username : 'aze',
    sex: '1',
    cities: []
  };

  public cities: any[]  = ['nanjing', 'paris', 'shanghai', 'beijing'];
  public hobbies: any[]  = [
    {
      key: 'video game',
      checked: false
    },
    {
      key: 'football',
      checked: false

    },
    {
      key: 'ping pong',
      checked: false
    },
    {
      key: 'natation',
      checked: false
    }];


  constructor() { }

  ngOnInit(): void {
  }

  public doSubmit = () => {
    console.log(this.peopleInfo.username);
  }

}
