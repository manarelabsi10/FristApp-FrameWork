import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HostListener } from '@angular/core';


@Component({
  selector: 'app-navbar',
  imports: [RouterLink , RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onWindowScroll(): void {
    const scrollOffset =
      window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    this.isScrolled = scrollOffset > 50; // تفعيل التصغير عند التمرير أكثر من 50px
  }
}
