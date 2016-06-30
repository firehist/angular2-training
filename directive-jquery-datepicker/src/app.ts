import {Component} from '@angular/core'
import { TypeaheadDirective } from './typeahead.component'

@Component({
  selector: 'app',
  template: `
    <h1>Directive jQuery datepicker</h1>
    <p>We used this plugin: <a href="http://api.jqueryui.com/datepicker/" target="_blank">http://api.jqueryui.com/datepicker/</a></p>
    <hr>
    <input type="text" [(ngModel)]="myDate" typeahead />
  `,
  directives: [ MyDatetimepickerDirective ]
})
export class App {
  constructor() {}
}
