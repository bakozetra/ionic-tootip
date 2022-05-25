import { Component,Directive } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

interface SentenceData {
  id: string,
  value: string,
  selected: boolean
}
@Directive({
  selector: '[tooltip]',
  exportAs: 'tooltip'
})

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage  {
  li: any;
  dataText = "";
  sentences: SentenceData[] = [];
  selectedSentences : SentenceData[] = []
  
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
        console.log(response);
        this.dataText = response;
        this.sentences = this.processText(this.dataText)
        let test = this.sentences.filter(sentence => sentence.selected)        
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
    console.log(sentences, 'sentences')
    return sentences
  }

  onSelectSentences = (id) => {
    console.log(id , 'id')
    const updatedSSentencesSelection = this.sentences.map(sentence => {
      if (sentence.id === id) {
        const updateSelect = { ...sentence, selected: !sentence.selected }
        console.log(updateSelect , 'updateSelect')
        return updateSelect
      } else {
        return sentence
      }
    }
    )
    this.sentences = updatedSSentencesSelection 
  }


}


