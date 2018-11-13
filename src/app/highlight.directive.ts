import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() color = 'yellow';

  constructor(private element: ElementRef) {
  }

  @HostListener('mouseenter') addHighlight() {
    this.element.nativeElement.style.backgroundColor = this.color;
  }

  @HostListener('mouseleave') deleteHighlight() {
    this.element.nativeElement.style.backgroundColor = null;
  }
}
