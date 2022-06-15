import { Component, OnInit, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { TranslateConfigService } from 'src/app/translate-config.service';

@Component({
  selector: 'app-radiio-buttons',
  templateUrl: './radiio-buttons.component.html',
  styleUrls: ['./radiio-buttons.component.scss'],
})
@Injectable({
  providedIn: 'root',
})
export class RadiioButtonsComponent implements OnInit {
  tooltipsTranslate: '';
  selectedLanguage: string;
  constructor(private translateConfigService: TranslateConfigService) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
    this.translateConfigService
      .getTranslation('TOOLTIPSTEXT.labelTooltip')
      .toPromise()
      .then((val) => {
        this.tooltipsTranslate = val;
      });
  }
  onlanguageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
    this.translateConfigService
      .getTranslation('TOOLTIPSTEXT.labelTooltip')
      .toPromise()
      .then((val) => {
        this.tooltipsTranslate = val;
      });
  }

  private subject = new Subject<any>();
  sendClickEvent() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
    this.translateConfigService
      .getTranslation('TOOLTIPSTEXT.labelTooltip')
      .toPromise()
      .then((val) => {
        this.tooltipsTranslate = val;
      });
    this.subject.next();
  }

  getClickEvent(): Observable<any> {
    return this.subject.asObservable();
  }
}
