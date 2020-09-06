# AngularApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.0.

## 第一课 目录结构
### 根目录
1. browserslistrc 支持浏览器说明文件
2. angular.json  angular的配置文件
3. karma conf js 测试运行期
4. package.json 项目node配置文件 包括项目的依赖 版本信息
5 tsconfig.xxx typescript 配置文件

### src 目录
1. assets 静态文件目录
2. app 是项目目录
3. enviroment 环境变量目录
5. index.html html的入口文件
6. main.ts 项目的入口文件
7. polyfilly 填充库文件
8. test.ts 测试的配置文件
9. style.scss 全局scss文件

### 生成部件
命令 ng g xxx 

## 第二课 简单使用
1. 生命属性public xxx = 'value' es6 中 class的变量 默认为public的
2. public 可以在当前类 和类外部进行访问
3. protected 当前类和它的子类
4. private 只有在当前类进行访问
5. 在方法中改变属性的值 使用this 指针获得属性
6. 几种绑定方式
![Alt text](photos/1.png?raw=true "Title")
    ````angular2
     双向绑定 <input [(ngModel)]="name">
    ````
7. *ngFor
    ```angular2
    let key=index
    ````
   这样可以获得每一条数据的索引下标
   
8. *ngIf Structural directives

9. *ngSwitch Structural directives

10. 绑定细节
![Alt text](photos/2.png?raw=true "Title")

11. 管道 目的是用来页面级别修改数据形式
    已经定义好的管道
    ````angular2
    {{title | uppercase}}
    ````
12. 绑定事件
     ````angular2
    （click）= "onSave()"
     (keydown)="keyDown($event)"
    ````
## 第四课 服务
1. 服务用来做持久化和component之间互相通信 共享代码
2. 使用
 ````angular2
      providers: [StorageService] 声明服务
     
     初始化
     constructor(public  storageService: StorageService ) {
         this.storageService = storageService;
       } 

````
## 第五课 获得DOM
1. 获得Dom节点 ViewChild 
 ````angular2
      在html页面中使用
      <div #id> 
     
     在component中 获得子节点对象
    ViewChild( 'id') child：ElementRef 
   
    ngAfterViewInit
    在这个生命周期方法中使用这个对象
````

## 第六课 父子组件通信
* 在父组件 传值 可以传对象 方法 甚至自己
 ````angular2
     <Child [msg]='vale'>
     
     把父自己传给子组件
     <Child [father]='this'>
````
* 在子组件 通过@Input收值
 ````angular2
     @Input('msg') value：xx
````

* 父去调用子的对象 方法 使用viewChild

* 父去调用子的对象 方法 使用outPut EventEmmiter
    ````angular2
       在子组件中实力化一个eventEmitter对象 并且用Output装饰器来装饰它
      @Output private outer = new EventEmitter<String>()
  
      在子组件中就可以使用 outer对象的emit 方法把message这个值广播出去
      this.outer.emit('message')  
       
      在父组件调用子组件中就使用事件接收器 来接受广播 注意：括号里面的事件名称必须和子组件的变量名一直 否则接受不到事件
      <app-child (outer)='getFromChild($event)'
   ````
## 第七课 生命周期钩子
* 生命周期钩子通俗就是组件创建，组件跟新，组件销毁的时候触发的方法
Angular 会按以下顺序调用钩子方法：

ngOnChanges - 在输入属性 (input)/输出属性 (output)的绑定值发生变化时调用。

ngOnInit - 在第一次 ngOnChanges 完成后调用。

ngDoCheck - 开发者自定义变更检测。

ngAfterContentInit - 在组件内容初始化后调用。

ngAfterContentChecked - 在组件内容每次检查后调用。

ngAfterViewInit - 在组件视图初始化后调用。

ngAfterViewChecked - 在组件视图每次检查后调用。

ngOnDestroy - 在指令销毁前调用。

## 第八课 RxJs
* 异步数据流工具 ReactiveX 的javascript版本
rxjs 和 回调 Promise对比
1. 回调使用异步
    ````javascript 1.8
     这里的精髓就在 参数cb cb是一个方法
      getCallbackDataByCallBack = (cb) =>  {
        setTimeout(() => {
          const name = 'zhang san';
          cb(name);
        }, 1000);
       }
      
          this.storageService.getCallbackDataByCallBack((data) => {
            console.log(data);
          });
   ````
2. 使用Promise
    ````angular2
    getPromiseData = () => {
          return new Promise((resolve, reject) => {
            setTimeout(() => {
              const name = 'zhang san';
              resolve(name);
            }, 1000);
          });
        }
      
    使用promise的then方法
     this.storageService.getPromiseData().then((data) => {
       console.log(data);
     })
     ````
3. 使用rxjs
    ````angular2
      getObeservableData = () => {
        return new Observable((observer) => {
          setTimeout(() => {
            const name = 'zhang san';
            observer.next(name);
          }, 3000);
        });
      }
      
    使用Observable的then方法
    　let stream = this.storageService.getObeservableData();
      stream.subscribe((data) => {
       console.log(data);
     });
     ````
4. rxjs 特点
* rxjs可以中途撤回
   ````angular2
    setTimeout(() => {
     stream.unsubscribe();
   }, 1000)
   ````
* rxjs 订阅后多次执行
* rxjs可以发射多个值
* rxjs提供了多个工具函数
可以使用map，filter ，concat 合并流

## 第九课 angular中的数据请求
* 6.0之后 使用httpClientModule
   ````angular2
   callHttpGet = async () => {
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
  这个也是链式使用http请求
  ````
* 使用jsonp获取服务器数据 这个是跨域的一种解决方案
1. 它会在请求的url后面加上callback方法 
1. 导入HttpClientJsonpModule 

## 第10课 angular中的路由
* 在app-routing.module.ts中添加路由配置
````angular2
const routes: Routes = [
  {
    path: 'account',
    component: AccountComponent
  },
  {
    path: 'favoris',
    component: FavorisComponent
  },
  {
    path: 'shopping',
    component: ShoppingComponent
  },
  {
  path: '**',
  redirectTo: 'account'
  }
];
````
在页面上进行路由控制
````angular2
  <ul>
    <li routerLink="/favoris" routerLinkActive='active'>favoris</li>
    <li routerLink="/account" routerLinkActive='active'>account</li>
    <li routerLink="/shopping" routerLinkActive='active'>shopping</li>
  </ul>
````
