import { Injectable } from '@angular/core';
import { User } from '../models/user.model';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public userList: User[] = [
    { username: 'Anas Shahid', id: 1, email: 'ashahid@nisum.com' },
    { username: 'Ishaq Bhojani', id: 2, email: 'ibhojani@nisum.com' },
    { username: 'Hammad Tariq', id: 3, email: 'htariq@nisum.com' },
    { username: 'Some One', id: 4, email: 'some@nisum.com' },

  ]
  public selectedUserSubject = new BehaviorSubject<User | null>(null);

  constructor() {
  }

  findUserById(id: number): User | undefined {
    return this.userList.find(x => x.id == id);
  }

  setSelectedUser(user: User) {
    this.selectedUserSubject.next(user);
  }

}
