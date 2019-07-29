import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberInput]'
})
export class NumberInputDirective {
  reg = new RegExp('^[0-9]*$');
  constructor() { }
  @HostListener('keydown', ['$event']) onkeydown() {
    // tslint:disable-next-line:no-string-literal
    if (!(this.reg.test(event['key']) || event['ctrlKey'] || event['key'] === 'Backspace')) {
      event.stopImmediatePropagation();
      event.preventDefault();
    }
  }
}
