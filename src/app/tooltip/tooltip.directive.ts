import {
    Directive,
    ElementRef,
    HostListener,
    Input,
    OnDestroy,
  } from '@angular/core';
  @Directive({
    selector: '[tooltip]',
  })
  export class TooltipDirective implements OnDestroy {
    @Input() tooltip = ''; // The text for the tooltip to display
    @Input() delay? = 400; // Optional delay input, in ms
    @Input() defaultColor = '';
    private myPopup;
    private timer;
    constructor(private el: ElementRef) {}
    ngOnDestroy(): void {
      if (this.myPopup) {
        this.myPopup.remove();
      }
    }
    @HostListener('mouseenter', ['$event']) onMouseEnter(e) {
    //   const rect = e.target.getBoundingClientRect();
      this.timer = setTimeout(() => {
        // let rect = e.target.getBoundingClientRect();
        let x = e.clientX + 10; //x position within the element.
        let y = e.clientY + 10;
        this.createTooltipPopup(x, y);
      }, this.delay);
    }
    @HostListener('mouseleave') onMouseLeave() {
      if (this.timer) clearTimeout(this.timer);
      if (this.myPopup) {
        this.myPopup.remove();
      }
    }
    @HostListener('document: mousemove', ['$event']) onMouseMove(e) {
      const pageX = e.pageX;
      const pageY = e.pageY;
    //   const rect = e.target.getBoundingClientRect();
    //   let xEl =
    //     this.el.nativeElement.getBoundingClientRect().left +
    //     this.el.nativeElement.offsetWidth / 2; // Get the middle of the element
    //   let yEl =
    //     this.el.nativeElement.getBoundingClientRect().top +
    //     this.el.nativeElement.offsetHeight +
    //     6; // Get the bottom of the element, plus a little extra
      const x = e.clientX + 10;
      const y = e.clientY + 10;
      if (this.myPopup) {
        this.myPopup.style.left = `${x}px`;
        this.myPopup.style.top = `${y}px`;
      }
    }
    private createTooltipPopup(x: number, y: number) {
      let popup = document.createElement('div');
      popup.innerHTML = this.tooltip + this.defaultColor;
      popup.setAttribute('class', 'tooltipContainer');
      console.log(popup , 'popup')
      popup.style.top = y.toString() + 'px';
      popup.style.left = x.toString() + 'px';
      popup.style.position = 'absolute';
      document.body.appendChild(popup);
      this.myPopup = popup;
      setTimeout(() => {
        if (this.myPopup) this.myPopup.remove();
      }, 156000); // Remove tooltip after 5 seconds
    }
  }