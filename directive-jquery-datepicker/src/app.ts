import {Component, Inject} from '@angular/core'

@Component({
  selector: 'app',
  template: `
    <h1>Directive jQuery datepicker</h1>
    <p>We used this plugin: <a href="http://api.jqueryui.com/datepicker/" target="_blank">http://api.jqueryui.com/datepicker/</a></p>
    <hr>
    <input type="text" [(ngModel)]="myDate" [datepicker] />
  `,
  directives: [ JQueryDatePickerDirective ]
})
export class App {
  usersPromise: Promise<IUser[]>
  usersObservable: Observable<IUser[]>

  constructor(@Inject(ApiService) private _apiService: ApiService) {
    // Promise
    this.usersPromise = this._apiService.getUsersPromise()
      .then(res => res.json())
    // Promise
    this.usersObservable = this._apiService.getUsersObservable()
      .map(res => res.json())

    //Errors
    this._apiService.getUserErrored()
      .catch(err => console.log(`my custom error ${err}`))
  }
}
