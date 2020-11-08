import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../User';
import { UsersComponent } from '../users/users.component';
import { UserDetailsService } from '../UserDetails.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

  user:User;
  constructor(activeroute:ActivatedRoute, userservice:UserDetailsService) {
    activeroute.params.subscribe(
      params=>{
        var id = parseInt(params["id"]);
        console.log(id);
        userservice.getUsers().subscribe(
          res=>{
            for(var i in res) {
              if(res[i].id == id) {
                this.user = res[i];
                break;
              }
            }
          }
        )
        
      }
    )
   }

  ngOnInit(): void {
  }

}
