import { Injectable, signal, WritableSignal } from '@angular/core';
import { Content } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

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
        imageUrl: index%2 == 0 ? 'https://random-image-pepebigotes.vercel.app/api/random-image' : 'https://th.bing.com/th/id/OIP.hHg6ApRWtij6di4UDJJ--AHaLH?w=204&h=306&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3',
      }      

      conts.push(cont);
    }
    this.contents.set(conts)
  }

}
