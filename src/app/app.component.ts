import { Component } from '@angular/core';
import { ActivatedRoute, Router, RouterOutlet } from '@angular/router';
import { SidebarComponent } from "./components/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet,
    SidebarComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'portfolio';

  constructor(private router: Router, private route: ActivatedRoute) {
    const redirect = this.route.snapshot.queryParamMap.get('redirect');
    if (redirect) {
      this.router.navigateByUrl(redirect);
    }
  }
}
