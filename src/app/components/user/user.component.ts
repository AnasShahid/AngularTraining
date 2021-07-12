import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {

  paramSubscribtion!: Subscription;
  selectedUser: User | undefined;
  user: User | undefined = { username: '', email: '', avatar: '', id: Math.floor(Math.random() * 100) };
  isEditMode = false;
  constructor(private route: ActivatedRoute, private userService: UserService) { }


  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      this.isEditMode = (params['editMode'] == ('true' || true));
    });
    this.paramSubscribtion = this.route.params.subscribe((params: Params) => {
      this.loadUser(params['id']);
    })
  }

  loadUser(id: number) {
    this.selectedUser = this.userService.findUserById(id);
    this.user = this.selectedUser ?? this.user;
  }

  saveUser(form: NgForm) {

  }

  ngOnDestroy(): void {
    this.paramSubscribtion.unsubscribe();
  }

}
