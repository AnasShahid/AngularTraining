import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit,OnDestroy {

  public currentUser:User |undefined |null;
  private userSubscription!:Subscription;

  constructor(public userService:UserService) { }

  
  ngOnInit(): void {
    this.userSubscription = this.userService.selectedUserSubject.subscribe(user=>{
      this.currentUser = user;
    });
  }
  
  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
