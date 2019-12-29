import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.scss']
})
export class SignupPageComponent implements OnInit {

  constructor(private userService : UserService,
              private router: Router) { }

  ngOnInit() {
  }

  loginInfo = {username: '', password: ''};

  async login(ev) {
    ev.preventDefault();
    var loginInfo = this.loginInfo;
    if (!loginInfo.username || !loginInfo.password) return;

    await this.userService.login(loginInfo);
    this.router.navigate(['/'])
  }

}
