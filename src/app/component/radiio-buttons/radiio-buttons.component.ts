import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-radiio-buttons',
  templateUrl: './radiio-buttons.component.html',
  styleUrls: ['./radiio-buttons.component.scss'],
})
export class RadiioButtonsComponent implements OnInit {
  @Input() friensTooltipText: string;
  @Input() familyTooltipText: string;
  @Input() enemiesTooltipText: string;

  ngOnInit() {}
}
