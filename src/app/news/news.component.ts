import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {

  public title = 'news title';

  public content = '<h2> i m html attribute</h2>';

  public arr: any[] = ['hello', 'i m array', 'three element'];
  public arr2: Array<any> = ['hello', 'i m array', 'three element'];

  public news: any[] = [
    {
      title: 'news 1',
      content: 'content 1'
    },
    {
      title: 'news 2',
      content: 'content 2'
    },
    {
      title: 'news 3',
      content: 'content 3'
    },
    {
      title: 'news 4',
      content: 'content 4'
    }
  ];

  public imagePath = 'assets/images/1.jpg';

  constructor() {
    this.title = 'title from constructor';
  }

  ngOnInit(): void {
  }

  public  keyDown = (event) => {
    console.log(event.key);
  }
}
