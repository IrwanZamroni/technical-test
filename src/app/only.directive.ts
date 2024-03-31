import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNumberformat]'
})
export class NumberFormat {

  constructor(private el: ElementRef) {}

  @HostListener('input', ['$event']) onInputChange(event: any) {
    const initialValue = this.el.nativeElement.value;
   
    if (initialValue === '' || initialValue === '.') {
      return;
    }
   
    this.el.nativeElement.value = initialValue.replace(/[^\d]/g, '');
   
    if (initialValue !== this.el.nativeElement.value) {
      event.stopPropagation();
    }
  }
  
}
