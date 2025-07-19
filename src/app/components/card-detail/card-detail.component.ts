import { Component, effect, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Content } from '../../services/models/models';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-card-detail',
  imports: [
    CommonModule,
],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent {

  route: ActivatedRoute = inject(ActivatedRoute);
  contentService: ContentService = inject(ContentService);

  content!: Content;
  showInfo: boolean = false;

  constructor(){
    effect(() => {
      const list = this.contentService.contents();
      this.route.paramMap.subscribe(params => {
        let id: string = params.get('id')!;
        this.content = this.contentService.contents().find(c => c.id === id)!;
        console.log(this.content);
      })
    });
  }
}
