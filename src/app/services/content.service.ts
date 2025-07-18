import { inject, Injectable, signal, WritableSignal } from '@angular/core';
import { Content } from './models/models';
import { HttpClient } from '@angular/common/http';
import { interval, switchMap, timer } from 'rxjs';
import { environment } from '../environment/environment';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  http: HttpClient = inject(HttpClient);


  private DB_URL: string = `https://www.googleapis.com/drive/v3/files?q=%27${environment.folderId}%27+in+parents&key=${environment.apiKey}&fields=files(id,name,webContentLink)`;

  contents: WritableSignal<Content[]> = signal([])
  refreshTime: number = environment.refreshTime*1000 //in millisecondi


  constructor(){
    // this.populateSite(20);
    this.getDriveImages()
    interval(this.refreshTime).subscribe(() => this.getDriveImages());
  }



  getDriveImages(): void {
    this.http.get<any>(this.DB_URL).subscribe((googleFiles) => 
      {
        let files: Content[] = googleFiles.files as Content[];
        files.forEach(file => file.webContentLink = file.webContentLink.split('&')[0])
        this.contents.set(files);
        console.log(this.contents());
      })
  }


  ////////////////////////////////////////////////////////////////////

  // imageUrls: string[] = [
  //   'https://random-image-pepebigotes.vercel.app/api/random-image',
  //   'https://th.bing.com/th/id/OIP.hHg6ApRWtij6di4UDJJ--AHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
  //   'https://th.bing.com/th/id/OIP.BFwkigC-Bbm8HW3hddeGQQHaSh?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  // ];

 


  // populateSite(ammount: number): void {

  //   let conts: Content[] = [];

  //   for (let index = 0; index < ammount; index++) {
  //     let cont: Content = {
  //       title: `Titolo ${index}`,
  //       id: index,
  //       imageUrl: this.imageUrls[index%this.imageUrls.length]
  //       // imageUrl: this.getRandomImageUrl();
  //     }      

  //     conts.push(cont);
  //   }
  //   this.contents.set(conts)
  // }
  

  // getRandomImageUrl(): string {

  //   let randomIndex: number = Math.floor(Math.random() * this.imageUrls.length);
  //   return this.imageUrls[randomIndex];
  // }
}
