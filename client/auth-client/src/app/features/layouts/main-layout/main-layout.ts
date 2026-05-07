import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLinkActive, RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-main-layout',
  imports: [RouterLink, RouterOutlet, RouterLinkActive],
  templateUrl: './main-layout.html',
  styleUrl: './main-layout.css',
})
export class MainLayout {
  private route = inject(Router);

  onLogout() {
    this.route.navigateByUrl('');
  }
}
