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
