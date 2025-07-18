import { Component } from '@angular/core';
import { SidebarButton } from '../../services/models/models';

@Component({
  selector: 'app-sidebar',
  imports: [],
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
      path: 'home',
      image: ''
    },
    {
      id:0,
      label: 'Home',
      path: 'home',
      image: ''
    },
    {
      id:0,
      label: 'Home',
      path: 'home',
      image: ''
    }
  ]
}
