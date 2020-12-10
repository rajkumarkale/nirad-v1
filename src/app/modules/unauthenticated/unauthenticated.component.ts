import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthenticated',
  templateUrl: './unauthenticated.component.html',
  styleUrls: ['./unauthenticated.component.scss']
})
export class UnauthenticatedComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  gotoLogin() {
      this.router.navigate(['unauthenticated/login']);
  }

  gotoRegister() {
    this.router.navigate(['unauthenticated/register']);
  }
}
