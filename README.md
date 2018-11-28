# AngularProfessionalWorkshop
Materials and samples for my workshop on 

# Professional Angular: coding Robust, Reactive and Performant Component-Based Applications and Libraries
https://milan2018.codemotionworld.com/workshop/professional-angular/

# Slides
TODO 
* [angular-professional-workshop-slides.pdf](angular-professional-workshop.pdf)

# Labs
* [labs.md](labs.md)
 
# References
Here you are the references that I mentioned during the workshop: 
* https://alligator.io/angular/route-resolvers/
More on Forms
* https://medium.com/spektrakel-blog/angular2-building-nested-reactive-forms-7978ecd145e4
* https://medium.com/@a.yurich.zuev/angular-nested-template-driven-form-4a3de2042475
* https://www.dev6.com/Angular2-Conditional-Validation-with-Reactive-Forms
Building Libraries with assets (images, global css)
* https://github.com/angular/angular-cli/issues/11071#issuecomment-416942988

# ABSTRACT
You have adopted Angular for your projects because you experienced first-hand its productive and robust approach to HTML5 Application development, and the advantages of a Component-Oriented design based on Encapsulation and Separation of Responsibilities. However, to fully exploit the Power of Components, you need to aggregate them in a consistent and modular set, and to take advanced of advanced concepts. In this workshop we first share our experience in building several Component Libraries, from API Design concepts to advanced Component interaction patterns, from packaging and documentation to refactoring & interoperability. We then move to addressing advanced Angular topics such as Dynamic Templating, Reactive features, Change Detection and Performance, which are key to implementing challenging applicaitons with world-class User Experiences with Angular.

# PREREQUIREMENTS
Good knowledge of HTML5 and of the DOM. Practical experience in Javascript and Angular 2/4/5/6 development (you should be able to write/compile/test/debug by yourself an Angular application including multiple interacting Components, Services, Routing, Data Binding, Sending Http requests). Working knowledge of Angular syntax, @Component, @Input, @Output, [(ngModel)] is required as these topics will NOT be explained in the workshop.

# HARDWARE AND SOFTWARE REQUIREMENTS
* Your own laptop
* Web Browser (Chrome or Firefox)
* Text Editor (Sublime, Atom, Visual Studio Code,…) and/or IDE (Eclipse, NetBeans, Intellij Idea or WebStorm, Visual Studio,.. )
* The Open Source Visual Studio Code editor is recommended to participants who have never used a JS-specific editor or IDE https://code.visualstudio.com/Download
* nodejs 8.x

```
npm install -g @angular/cli http-server 
```

* Optional but useful: – git client

# TOPICS
## Component-Based Design
* issues and challenges in developing complex / large HTML5 applications
* advantages of a Component-Based approach

## Designing a Component Library
* principles of API design
* basic component patterns
* “”smart””, “”dumb”” and “”stateless”” components
* how to interconnect multiple collaborating Components to achieve complex UI interactions
* separating responsibilities with Directives
* separating responsibilities with ng-content composition
* layout vs ui components
* Decorator components
* using components as a DSL

## Implementing a Component Library
* Custom Form inputs and ControlValueAccessor
* custom Validators
* data oriented components (Combo, Table, etc…)
* lifecycle callbacks
* Dynamic Templating (e.g. Grid Cells)
* refactoring

## Distributing a Component Library
* packaging with ng-packgr and Angular CLI
* documentation with Compodoc
* interoperability with other libraries

## Reactive Angular
* thinking in Event Streams
* basic operators
* what’s new in RX.js 6.x
* create your own operators
* Typical Use Cases: managing selections, data refresh, errors and warnings, loading indicators
* Advanced UI Interaction: a use case

## Change Detection: what you need to know
* basic change detection
* potential performance issues
* OnPush Strategy vs managing @Inputs and @Output
* immutable inputs

## Designing for Performance
* make more components
* align component boundaries with your application logic and change patterns
* use stateless Pipes

## Testing and Tuning Angular Performance
* with Browser Developer Tools & Augury
* logging Change Detection
* other tools

## References & Useful Resources

# TRAINING OBJECTIVES
The workshop will make you understand:
* the challenges in developing large/complex Angular applications and reusable Component Libraries
* the advantages of a Component-based approach to the UI
* the differences between various types and roles of UI components
* basic Reactive Programming concepts applied to Angular
* how Angular manages Change Detection and how to take this into account to achieve stellar performance

After the workshops you will be able to:
* design a complex UI by splitting it into separate, reusable components
* design an easy to use and modular Component API
* implement and package a reusable Component Library in Angular 4.x and later
* exploit rx.js and Reactive Programming concepts to simplify the implementation of complex UI iteractions
* create complex interactions by having multiple components talk to each other
* when needed, fine-tune application performance

# WHO THE WORKSHOP IS DEDICATED TO?
Angular Developers who master the basics of the framework and would like to learn an effective approach to design, implement, and fine-tune complex real-world Angular Applications or Component Libraries in a robust, modular and future-proof way.

# About me 
Carlo’s passion for Software began with a C128, then grew with Linux, Java/JavaScript, web & enterprise apps, and now cloud & security. After a PhD and research experience at the University of Genova and the CNIT National TLC Research Consortium, and an exciting time at startup Eptamedia, he’s now a Solution Architect and Senior Trainer at NIS s.r.l.. His personal communication style as an architect and trainer, both technically precise and able to present in an engaging  way complex topics to an heterogeneous audience has been appreciated online and at many events from Devoxx to Codemotion.



## Build Info
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
