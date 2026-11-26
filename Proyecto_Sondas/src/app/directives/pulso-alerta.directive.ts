import { Directive, ElementRef, Input, OnChanges, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appPulsoAlerta]',
  standalone: true
})
export class PulsoAlertaDirective implements OnChanges {
  @Input() appPulsoAlerta = false;

  constructor(
    private el: ElementRef<HTMLElement>,
    private renderer: Renderer2
  ) {}

  ngOnChanges(): void {
    if (this.appPulsoAlerta) {
      this.renderer.setStyle(this.el.nativeElement, 'border', '2px solid #ff2a2a');
      this.renderer.setStyle(this.el.nativeElement, 'box-shadow', '0 0 14px rgba(255, 42, 42, 0.55)');
      this.renderer.setStyle(this.el.nativeElement, 'cursor', 'pointer');
    } else {
      this.renderer.removeStyle(this.el.nativeElement, 'border');
      this.renderer.removeStyle(this.el.nativeElement, 'box-shadow');
      this.renderer.removeStyle(this.el.nativeElement, 'cursor');
    }
  }
}