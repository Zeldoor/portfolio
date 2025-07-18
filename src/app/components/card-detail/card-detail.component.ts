import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContentService } from '../../services/content.service';
import { Content } from '../../services/models/models';
import { CommonModule } from '@angular/common';
import { ɵEmptyOutletComponent } from "../../../../node_modules/@angular/router/router_module.d-Bx9ArA6K";

@Component({
  selector: 'app-card-detail',
  imports: [
    CommonModule,
],
  templateUrl: './card-detail.component.html',
  styleUrl: './card-detail.component.css'
})
export class CardDetailComponent implements OnInit{

  route: ActivatedRoute = inject(ActivatedRoute);
  contentService: ContentService = inject(ContentService);

  content!: Content;
  showInfo: boolean = false;

  ngOnInit(): void {
      this.route.paramMap.subscribe(params => {
        let id: string = params.get('id')!;
        this.content = this.contentService.contents().find(c => c.id === id)!;
      })
  }
}
