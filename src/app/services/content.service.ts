import { Injectable, signal, WritableSignal } from '@angular/core';
import { Content } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  imageUrls: string[] = [
    'https://random-image-pepebigotes.vercel.app/api/random-image',
    'https://th.bing.com/th/id/OIP.hHg6ApRWtij6di4UDJJ--AHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
    'https://th.bing.com/th/id/OIP.BFwkigC-Bbm8HW3hddeGQQHaSh?w=115&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7'
  ]

  constructor(){
    this.populateSite(20);
  }

  contents: WritableSignal<Content[]> = signal([])

  populateSite(ammount: number): void {

    let conts: Content[] = [];

    for (let index = 0; index < ammount; index++) {
      let cont: Content = {
        title: `Titolo ${index}`,
        id: index,
        imageUrl: this.imageUrls[index%this.imageUrls.length]
        // imageUrl: this.getRandomImageUrl();
      }      

      conts.push(cont);
    }
    this.contents.set(conts)
  }
  

  getRandomImageUrl(): string {

    let randomIndex: number = Math.floor(Math.random() * this.imageUrls.length);
    return this.imageUrls[randomIndex];
  }
}
