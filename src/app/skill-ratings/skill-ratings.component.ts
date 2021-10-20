import { Component, OnInit, Inject } from '@angular/core';

import { UserService } from '../_services/user.service';
import { Skill } from '../Models/skill';

@Component({
  selector: 'app-skill-ratings',
  templateUrl: './skill-ratings.component.html',
  styleUrls: ['./skill-ratings.component.css']
})
export class SkillRatingsComponent implements OnInit {
  skills?: Skill[];
  constructor(@Inject ('API_BASE_URL')  apiUrl: string, public _userService: UserService) { }

  ngOnInit(): void {
    this._userService?.getUserData().subscribe((data: any) => {
      this.skills = data.data.skills;
      console.log(data.data)
    },
   
    (error: any) => {
      console.log(error)
    }, () => {
      console.log("completed")
    });
  }

}
