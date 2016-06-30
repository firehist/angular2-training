import {Component} from '@angular/core'
import { TypeaheadDirective } from './typeahead.component'

@Component({
  selector: 'app',
  template: `
    <h1>Directive jQuery typeahead</h1>
    <p>We used this plugin: <a href="https://github.com/running-coder/jquery-typeahead" target="_blank">https://github.com/running-coder/jquery-typeahead</a></p>
    <hr>
    <input type="text" [(ngModel)]="myField" typeahead />
  `,
  directives: [ TypeaheadDirective ]
})
export class App {
  myField: string
  constructor() {}
}
