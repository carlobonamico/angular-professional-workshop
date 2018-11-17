
class: center, middle

# Professional Angular: coding Robust, Reactive and Performant Component-Based Applications and Libraries

https://milan2018.codemotionworld.com/workshop/professional-angular/


Carlo Bonamico - carlo.bonamico@gmail.com - @carlobonamico

  <a href="http://twitter.com/carlobonamico">@carlobonamico</a>

.slide-footer[![Codemotion](images/codemotion.jpg)]

???

Notes for the _first_ slide!

---
## While you are waiting...

* download the labs from
  * https://github.com/carlobonamico/angular-professional-workshop
  * angular2 branch
```
git clone https://github.com/carlobonamico/angular-professional-workshop
```

or plain "Download Zip" from browser
---
# ABSTRACT
You have adopted Angular for your projects because you experienced first-hand its productive and robust approach to HTML5 Application development, and the advantages of a Component-Oriented design based on Encapsulation and Separation of Responsibilities. However, to fully exploit the Power of Components, you need to aggregate them in a consistent and modular set, and to take advanced of advanced concepts. In this workshop we first share our experience in building several Component Libraries, from API Design concepts to advanced Component interaction patterns, from packaging and documentation to refactoring & interoperability. We then move to addressing advanced Angular topics such as Dynamic Templating, Reactive features, Change Detection and Performance, which are key to implementing challenging applicaitons with world-class User Experiences with Angular.

---
# WHO THE WORKSHOP IS DEDICATED TO?
Angular Developers who master the basics of the framework and would like to learn an effective approach to design, implement, and fine-tune complex real-world Angular Applications or Component Libraries in a robust, modular and future-proof way.

---
# PREREQUIREMENTS
Good knowledge of HTML5 and of the DOM. Practical experience in Javascript and Angular 2/4/5/6 development (you should be able to write/compile/test/debug by yourself an Angular application including multiple interacting Components, Services, Routing, Data Binding, Sending Http requests). Working knowledge of Angular syntax, @Component, @Input, @Output, [(ngModel)] is required as these topics will NOT be explained in the workshop.

---
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

---
## Visual Studio Code
* Community has incresed support for developing Angular applications.
* lots of useful extensions

## Visual Studio Code extensions
https://medium.com/frontend-coach/7-must-have-visual-studio-code-extensions-for-angular-af9c476147fd


---
# TOPICS
* Component-Based Design
* Designing a Component Library
* Implementing a Component Library
* Distributing a Component Library
* Reactive Angular
* Change Detection: what you need to know
* Designing for Performance
* Testing and Tuning Angular Performance
* References & Useful Resources

---
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
---
## Approach
For each module, hands-on lab will include
- quizzes (which of these variants is better? trade-offs)
- interactive examples to complete and modify
---


## Key references
* All Labs and links available at
  * https://github.com/carlobonamico/angular-professional-workshop
  
* Clean Code: the book
  * https://books.google.it/books/about/Clean_Code.html?id=hjEFCAAAQBAJ
  

<img src="images/CleanCode.png" >

---

## Revising core Javascript concepts
* Yakov Fain - Advanced Introduction to Javascript
  * https://www.youtube.com/watch?v=X1J0oMayvC0
  * http://enterprisewebbook.com/appendix_a_advancedjs.html
    * https://github.com/Farata/EnterpriseWebBook
    * https://github.com/Farata/EnterpriseWebBook_sources




---
class: center
name: module-1
## Component-Based Design
---
# TOPICS
* issues and challenges in developing complex / large HTML5 applications
* advantages of a Component-Based approach

---
template: module-1
## Designing a Component Library
---
# TOPICS
* principles of API design
* basic component patterns
* “smart”, “dumb” and “stateless” components
* how to interconnect multiple collaborating Components to achieve complex UI interactions
* separating responsibilities with Directives
* separating responsibilities with ng-content composition
* layout vs ui components
* Decorator components
* using components as a DSL
---
## Implementing a Component Library
---
# TOPICS
* Custom Form inputs and ControlValueAccessor
* custom Validators
* data oriented components (Combo, Table, etc…)
* lifecycle callbacks
* Dynamic Templating (e.g. Grid Cells)
* refactoring
---
## Distributing a Component Library
---
# TOPICS
* packaging with ng-packgr and Angular CLI
* documentation with Compodoc
* interoperability with other libraries
---
## Reactive Angular
---
# TOPICS
* thinking in Event Streams
* basic operators
* what’s new in RX.js 6.x
* create your own operators
* Typical Use Cases: managing selections, data refresh, errors and warnings, loading indicators
* Advanced UI Interaction: a use case
---
## Change Detection: what you need to know
---
# TOPICS
* basic change detection
* potential performance issues
* OnPush Strategy vs managing @Inputs and @Output
* immutable inputs
---
## Designing for Performance
---
# TOPICS
* make more components
* align component boundaries with your application logic and change patterns
* use stateless Pipes
---
## Testing and Tuning Angular Performance
---
# TOPICS
* with Browser Developer Tools & Augury
* logging Change Detection
* other tools
---
## References & Useful Resources
---



---

# Thank you for your attention

---
