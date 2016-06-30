import {Directive, Inject, ElementRef} from '@angular/core';
import 'jquery'
import 'jquery-typeahead'

@Directive({
  selector: '[typeahead]'
})
export class TypeaheadDirective {
  constructor(@Inject(ElementRef) private _elementRef: ElementRef) {}
  ngAfterViewInit() {
    jQuery(this._elementRef.nativeElement).typeahead()
  }
}
