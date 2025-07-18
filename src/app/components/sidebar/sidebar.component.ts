import { Component } from '@angular/core';
import { SidebarButton } from '../../services/models/models';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

  buttons: SidebarButton[] = [
    {
      id:0,
      label: 'Home',
      path: 'home',
      image: ''
    },
    {
      id:1,
      label: 'Gallery',
      path: 'gallery',
      image: ''
    },
    {
      id:0,
      label: 'About me',
      path: 'about',
      image: ''
    },
    {
      id:0,
      label: 'Contacts',
      path: 'contacts',
      image: ''
    }
  ]


  trackById(item: any): number {
    return item.id;
  }
}
