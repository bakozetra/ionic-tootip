import { Component, HostListener, ViewChild} from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormControl } from '@angular/forms';

interface SentenceData {
  id: string,
  value: string,
  selected: boolean
}
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  dataText = "";
  sentences: SentenceData[] = [];
  wordsCount = 0;
  followTooltipVisible = false;
  
  constructor(private http: HttpClient) {
  }

  ngOnInit(): void {
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
        this.sentences = this.processText(this.dataText)
      });
    function hideloader() {
      document.getElementById('loading').style.display = 'none';
    }
  }

  processText(text) {
    const sentences = text.split('.')
      .map(sentence => `${sentence}.`)
      .map((sentence, index) => {
        return { id: index, value: sentence, selected: false }
      })
    return sentences
  }

  onSelectSentences = (id) => {
    const updatedSSentencesSelection = this.sentences.map(sentence => {
      if (sentence.id === id) {
        const updateSelect = { ...sentence, selected: !sentence.selected }
        return updateSelect
      } else {
        return sentence
      }
    }
    )
    this.sentences = updatedSSentencesSelection
  }
  handlesentenceHover(event: any) {
    const sentenceText = event.target.innerText
    const countWords = sentenceText.trim().split(' ').length
    this.wordsCount = countWords

  }
  handleSentenceMouseEnter() {
   this.followTooltipVisible = true
  }
  handleSentenceMouseLeave() {
    this.followTooltipVisible = false 
  }

  ionViewDidEnter(){
   return this.ngOnInit()
}
// @ViewChild("cursor") refCursor: any;
// @HostListener('document: mousemove', ['$event'])
//   onMouseMove(event: any) {
//     let styles = this?.refCursor?.nativeElement?.style;
//     styles.left = event.pageX + 'px';
//     styles.top= event.pageY + 'px';
//   }
}


