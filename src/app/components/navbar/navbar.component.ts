/* eslint-disable prettier/prettier */
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  constructor(private readonly router: Router) { }

  goToReactive(): void {
    this.router.navigate(['contact-reactive'], {
      queryParams: { name: 'DOMINICODE' },
    });
  }

  goToTemplate(): void {
    this.router.navigate(['contact-template', '580']);
  }
}
