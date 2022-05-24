import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {  
  li: any;
  dataText = "";
  constructor(private http: HttpClient) {
    console.log('http::::::');
  }
  ngOnInit(): void {
    console.log('ngOnInit::::::');
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
      });
    function hideloader() {
      document.getElementById('loading').style.display = 'none';
    }
  }
}