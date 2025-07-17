import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Content } from '../../services/models/models';

@Component({
  selector: 'app-card-detail',
  imports: [],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent implements OnInit{

  route: ActivatedRoute = inject(ActivatedRoute);
  contentService: ContentService = inject(ContentService);

  content!: Content;

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        let id: number = Number(params.get('id')!)
        this.content = this.contentService.contents().find(c => c.id == id)!
      })
  }
}
