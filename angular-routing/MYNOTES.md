Semantic Versioning
Version 1.2.3(major.minor.fix)

ng new ex --routing --scss
-> To create a module ng g m modulename

Component comprise of template(html), classs(code type sccript, data& methods) and meta data(decorator)

-> 3 ways we can define selector in component
@Component({
		selector:'app-root',
		templateUrl:'./app.component.html',
		styleUrls:['./app.component.css'	
})


@Component({
		selector:'./app-root',
		templateUrl:'./app.component.html',
		styleUrls:['./app.component.css'	
})
<div class="app-root"></div>

@Component({
		selector:'[app-root]',
		templateUrl:'./app.component.html',
		styleUrls:['./app.component.css'	
})
<div app-root></div>

@Component({
		selector:'[app-root]',
		template:`<div>aaaaaaaa  				//For multiple files in template use backtic
		sddddddddddd</div>`,
		styleUrls:['./app.component.css'] // or styles:[					`csss`		]	
})

-> To create a service ng g s name 
-> To get depedencies npm install
-> Services are also class in angular
	we have to mention service details in providers of app.module.ts
	Angular create a common shared service space for service, so any module or any component can access services
	
	Note: Dig more into lazy loading application with respect to service
	
Servie ->	@injectable
Component -> @component
Mode -> @NgModule

-> To build angular app as a prod app
	ng build --prod
	npm install http-server -g --save
	
	To run angular app:	http-server ./dist/app-name

-> Observables are sequence of items that arrives asynchronously over time.
    Http call - single item
    Single Item - Http repsonse

 -> RxJS
  Reactive extention for js
  External library to work with observable

  ->To create model
  ng generate class hero model
  -> To create interface
  ng generate i [name]

  -> Error Handling
  https://scotch.io/bar-talk/error-handling-with-angular-6-tips-and-best-practices192

  -> To create intercetor
  ng g class my-http-interceptor

  

