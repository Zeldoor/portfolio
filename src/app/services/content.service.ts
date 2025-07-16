import { Injectable, signal, WritableSignal } from '@angular/core';
import { Content, Tag } from './models/models';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor() { }

  contents: WritableSignal<Content[]> = signal([
    {
      id: 0,
      title: 'Titolo serio',
      imageUrl: '',
    },
    {
      id: 1,
      title: 'Titolo serio',
      description: 'fjanhfahsoh',
      tags:[
        Tag.PORTRAIT,
        Tag.WANAMA,
        Tag.WANAMA,
        Tag.WANAMA,
        Tag.WANAMA,
      ],
      imageUrl: '',
    },
  ])
}
