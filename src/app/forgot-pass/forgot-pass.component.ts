import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth/auth.service';
import {ActivatedRoute} from '@angular/router';
import {Subscription} from 'rxjs';
import {ForgotChangePasswordRequest} from '../payload/ForgotChangePasswordRequest';

@Component({
  selector: 'app-forgot-pass',
  templateUrl: './forgot-pass.component.html',
  styleUrls: ['./forgot-pass.component.css']
})
export class ForgotPassComponent implements OnInit {
  newPassword:string;
  newPasswordConfirm:string;
  key:string;
  eenc:string;
  private querySubscription: Subscription;


  constructor(private authService: AuthService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.querySubscription = this.route.queryParams.subscribe(
      (queryParam: any) => {
        this.key = queryParam['key'];
        this.eenc = queryParam['eenc'];
      });
  }

  changePassword(newPassword: string, newPasswordConfirm: string) {
    let request;
    if(newPassword === newPasswordConfirm){
      request = new ForgotChangePasswordRequest(this.eenc, this.key, newPassword)
    }else{
      return;
    }
    this.authService.changePassword(request).subscribe(data => {
          console.log(data);
      })
    }

}
