import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<div class="title">{{title | uppercase }}</div>
    <dl>
      <dt>Q: {{question}}</dt>
      <dd>A: {{answer}}</dd>
    </dl>
    <footer>Angular version: {{angularVersion}}</footer>`,
  styles: [
    `
    .title { color: steelblue; text-align: center; }
    dd     { margin: 0.3em 0; }`,
  ],
})
export class AppComponent {
  title = `Udemy Course - Q&A App`;
  // title    = 5;
  question = 'Is Angular 2 easier to learn than Angular 1?';
  answer = `yes, there are fewer concepts,
    Dependency Injection has been simplified, Change Detection is uni-directional`;
  angularVersion = '8.2.0';
  constructor() {
    console.clear();
  }
  ngOnInit() {
    setTimeout(() => (this.title = 'new Title'), 3000);
  }
}
