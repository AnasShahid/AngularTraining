import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['id', 'username', 'email', 'avatar'];

  constructor(public userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onRowClick(row: any) {
    //this.router.navigate(['admin/user', row.id], { queryParams: { editMode: true } })
    this.userService.setSelectedUser(<User>row);
  }

}
