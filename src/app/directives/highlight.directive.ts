import { Directive, ElementRef, HostListener, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {

  constructor(private elRef:ElementRef, private renderer:Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }

  @HostListener('mouseenter') mouseEnter(event:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','yellow');
  }

  @HostListener('mouseleave') mouseLeave(event:Event){
    this.renderer.setStyle(this.elRef.nativeElement, 'background-color','transparent');
  }

}
