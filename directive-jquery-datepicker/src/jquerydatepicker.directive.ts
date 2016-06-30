import {Directive, ElementRef, Inject, OnInit, AfterViewInit} from "@angular/core";

import * as $ from 'jquery'

@Directive({
  name: 'datepicker'
})
export class JQueryDatePickerDirective implements AfterViewInit {
  constructor(@Inject(ElementRef) private _elementRef: ElementRef) {}
  ngAfterViewInit() {
    $(this._elementRef.nativeElement).datepicker()
  }
}
