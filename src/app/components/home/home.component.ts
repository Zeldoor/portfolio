import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

import { CardComponent } from '../card/card.component';
import { Content, Tag } from '../../services/models/models';
import { ContentService } from '../../services/content.service';

@Component({
  selector: 'app-home',
  imports: [
    CommonModule,
    NavbarComponent,
    CardComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  contentService: ContentService = inject(ContentService)

  contents: Content[] = this.contentService.contents();

  openImageViewer(content: Content){
    console.log(`opened image with id: ${content.id}`)
  }

  trackById(item: any){
    return item.id;
  }
}
