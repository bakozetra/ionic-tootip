import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TranslateConfigService } from '../translate-config.service';
import { PopoverController, Platform } from '@ionic/angular';

interface SentenceData {
  id: string;
  value: string;
  selected: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataText = '';
  sentences: SentenceData[] = [];
  wordsCount = 0;
  followTooltipVisible = false;
  tooltipText = '';
  selectedLanguage: string;
  desktopPlatform = this.platform.is('desktop');
  buttonTooltip = '';
  constructor(
    private http: HttpClient,
    private translateConfigService: TranslateConfigService,
    public popoverCtrl: PopoverController,
    public platform: Platform
  ) {
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit(): void {
    this.sentences = this.processText('');
    this.getText();
    document.addEventListener('contextmenu', function (event) {
      event.preventDefault();
    });
    this.translateConfigService
      .getTranslation('HOME.tooltipText')
      .toPromise()
      .then((val) => {
        this.tooltipText = val;
      });
    this.translateConfigService
      .getTranslation('BUTTON')
      .toPromise()
      .then((val) => {
        console.log(val, 'vallll');
        const test = val.map((text) => {
          console.log('text::::::', text);
          console.log('text.name::::::', text.button);
          this.buttonTooltip = text.button;
          // console.log('his.buttonTooltip::::::', this.buttonTooltip);
        });
        return test;
      });
  }

  getText() {
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    this.http
      .get(
        'https://baconipsum.com/api/?type=meat-and-filler&sentences=22&format=text',
        {
          headers,
          responseType: 'text' as const,
        }
      )
      .subscribe(async (response: any) => {
        if (response) {
          // hideloader();
        }
        this.dataText = response;
        this.sentences = this.processText(this.dataText);
      });
  }

  processText(text) {
    const sentences = text
      .split('.')
      .map((sentence) => `${sentence}.`)
      .map((sentence, index) => {
        return { id: index, value: sentence, selected: false };
      });
    return sentences;
  }

  onSelectSentences = (id) => {
    if (!this.desktopPlatform) {
      return;
    }
    const updatedSSentencesSelection = this.sentences.map((sentence) => {
      if (sentence.id === id) {
        const updateSelect = { ...sentence, selected: !sentence.selected };
        return updateSelect;
      } else {
        return sentence;
      }
    });
    this.sentences = updatedSSentencesSelection;
  };
  handlesentenceHover(event: any) {
    const sentenceText = event.target.innerText;
    const countWords = sentenceText.trim().split(' ').length;
    this.wordsCount = countWords;
  }
  handleSentenceMouseEnter() {
    this.followTooltipVisible = true;
  }
  handleSentenceMouseLeave() {
    this.followTooltipVisible = false;
  }

  ionViewDidEnter(e) {
    if (e) {
      this.getText();
    }
  }

  ionScrolling() {
    let existingTooltip = document
      .querySelectorAll('#tooltip-id')
      .forEach((el) => el.remove());
  }
  languageChanged() {
    this.translateConfigService.setLanguage(this.selectedLanguage);
    this.translateConfigService
      .getTranslation('HOME.tooltipText')
      .toPromise()
      .then((val) => {
        this.tooltipText = val;
      });

    this.translateConfigService.setLanguage(this.selectedLanguage);
    this.translateConfigService
      .getTranslation('BUTTON')
      .toPromise()
      .then((val) => {
        const test = val.map((text) => {
          console.log('text::::::', text);
          console.log('text.name::::::', text.button);
          this.buttonTooltip = text.button;
          // console.log('his.buttonTooltip::::::', this.buttonTooltip);
        });
        return test;
      });
  }
}
