
# Modern js Development approach

 ## Development
  
* language -typescript,es2021,es2020, jsx,tsx
* Development - node js based server
		   
 ##   transition
 ```
	             - we need to run node js based server during development
				 - the application is built the code is converted to 
				  javascript
				  -while the application is built it is also packed ,when
				  packing the unnecassary unused code in the libraries 
				  will be ignored only the used js code and css code will be
				  code - BUNDLING
				  - We also can run unit and integration tests
				  - we can also lint our application [checking quality of code]
				  
		   Node js is a platform which is needed to carry out all 
		   these activities
		   
		   these activities are carried out by taskrunners[grunt,gulp], scripts,
		   bundling tools [webpack], transpiler[babel]
		   
```
		 
		 
   production
   
           language - es5 /es2015/es2017
		   server - iis/nginx/apache/tomcat
		   
		   
		   
		All the activities that need to be configured
		to carry out 
		          development
				  building
				  packing
				  testing
				  linting
				  is carried one single utility
				  called as Angular CLI
				  
		to work with angular project
		
		        1. create project [create components, pipe,directives,services...]
				2. build app
				3. run app
				4. run test cases
				5. run linting
				
				angular cli is the tool needed -13
				  

 node js
 
          utilities
		           typescript compiler
		            babel
		  
		           npm install -g typescript 
				   
		  libraries - should be installed locally [in the project scope]
		          angular library - production
				  bootstrap - production
				  jasmine - development
				  typescript library - development
				  
				  Development libraries
				  
				    npm install --save-dev <library name>
				  
				  Production
				  
				     npm install --save <libraryname>
					 npm install <libraryname>
					 
					 these libraries are downloaded under
					 node_modules in the current project folder
					 and the library details are updated
					 in package.json
					 
					 
				  Local install means - you have to run these
				  commands in the project folder
				  
				  global installation - can be run anywhere
				  
Angular -
     
	 an application app is meant  develop SPA
	 
	 That single page is a collection of components
	 
	 An angular application is also called an angular module
	 
	 And an angular module is collection of 
	 
	         1. modules
			 2. components
			 3. services
			 4. pipes
			 5. Directives
			 6. Routing configuration
			 
			 Component?
			              UI Unit
						  
						         1. template [html]
								 2. style [css]
								 3. data
								 4. events [handling]
								 
					
					@Component(
					   selector: 'app-box'
					   templateUrl:"x.html",
					   styleUrls:['x.css"]
					)
					class Box{
					   things:string[]
					   
					   handleButton(){
					   }
					}
								 
								 
								 
								 
								 <app-box></app-box>

# Directives
   
   The custom elements and attributes that you create in angular  - directives

   Directives are classified into 

   * Component Directives
   * Structural Directives
   * Atrribute directives

## Structural directives
 
   These are custom attributes

   * all structural directives are prefixed with *
   * Structural directives deals with generating template or hiding/unhiding templates

   Examples : ngIf, ngSwitch, ngFor

## Attribute Directives 

    * these directives impacts behaviour [data or css will be changed]

    furthur attribute directives are classified into 

* input directives
* output Directives
* input output directives
### input directives

* input directives are enclosed within [] 
* it receives values and impacts behaviour 

examples: style,ngStyle,ngClass,routerLink

### output Directives
* output directives are events 
* wheneven the events associated with the directive occurs, it calls the function mentioned in the value 
* it is enclosed within ()

examples : click,mouseover,keyup,change,keydown

### input output Directives
* input output directives works two way

the is a directive called ngModel generally
it is applied on form elements
when ever you change form data variable will be changed to
whenever variable value changed programatically form data will change

