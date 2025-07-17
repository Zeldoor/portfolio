import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { Content } from '../../services/models/models';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  contentService: ContentService = inject(ContentService)

  contents: Content[] = this.contentService.contents();

  column1: Content[] = [];
  column2: Content[] = [];
  column3: Content[] = [];

  ngOnInit() {
    this.distributeContent();
  }

  distributeContent() {
    this.column1 = [];
    this.column2 = [];
    this.column3 = [];

    this.contents.forEach((item, index) => {
      if (index % 3 === 0) this.column1.push(item);
      else if (index % 3 === 1) this.column2.push(item);
      else this.column3.push(item);
    });
  }

  openImageViewer(content: Content){
    console.log(`opened image with id: ${content.id}`)
  }

  trackById(item: any){
    return item.id;
  }
}
