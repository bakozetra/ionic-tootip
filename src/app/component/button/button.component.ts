import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  buttonText = [
    {
      name: 'first button',
      id: 1,
    },
    {
      name: 'second button',
      id: 1,
    },
    {
      name: 'third button',
      id: 1,
    },
    {
      name: 'forth button',
      id: 1,
    },
  ];
  @Input()
  buttonTooltip;
  constructor() {
    console.log('buttonTooltip::::::', this.buttonTooltip);
  }

  ngOnInit() {}
}
