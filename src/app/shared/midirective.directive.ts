import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appMidirective]'
})
export class MidirectiveDirective {

  constructor(
    private elemento: ElementRef,
    private renderer: Renderer2
  ) { 
    renderer.setStyle(elemento.nativeElement, 'font-size','20'); 
}
}
