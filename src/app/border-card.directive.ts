import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]'
})
export class BorderCardDirective {

  private initialColor: string = '#f5f5f5';
  private defautColor: string = '#009688';
  private defautHeight: number = 200;
  
  constructor(private el: ElementRef) {
    this.setHeight(this.defautHeight);
    this.setBorder(this.initialColor)
  }

  @Input('pkmnBorderCard') borderColor : string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defautColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder('#f5f5f5');
  }

  setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }


  private setBorder(color: string){
    let border = 'solid 4px ' + color;
    this.el.nativeElement.style.border = border;
  }
}
