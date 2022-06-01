import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

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
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.sentences = this
      .processText(`The zeitgeist contends that those seashores are nothing more than punishments.
       A board is a blowgun from the right perspective. The octagon of a condition becomes a wayless newsprint. 
       The literature would have us believe that a farand range is not but a ski. 
       A wind can hardly be considered a plumbless rugby without also being a norwegian. 
       We know that the unfree selection reveals itself as a jellied salt to those who look. 
       Their burma was, in this moment, a longish mice. 
       This is not to discredit the idea that a spicy carnation is a female of the mind. 
       Before policemen, baths were only josephs. The literature would have us believe that a towy slash is not but a nose. 
       Some assert that a gemini can hardly be considered a playful ladybug without also being a subway.
        An ignored authorization without gasolines is truly a captain of squashy armies.
       Few can name a tasseled sword that isn't a becalmed furniture. Recent controversy a`);
    const headers = new HttpHeaders().set(
      'Content-Type',
      'text/plain; charset=utf-8'
    );
    this.http
      .get('http://metaphorpsum.com/paragraphs/2/16', {
        headers,
        responseType: 'text' as const,
      })
      .subscribe(async (response: any) => {
        if (response) {
          // hideloader();
        }
        this.dataText = response;
        this.sentences = this.processText(this.dataText);
      });
    function hideloader() {
      document.getElementById('loading').style.display = 'none';
    }
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

  ionViewDidEnter() {
    return this.ngOnInit();
  }
}
