import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { UsersComponent } from './users/users.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { RouterModule, Routes } from '@angular/router';

var routes:Routes = [
    {
        path: '',
        component: UsersComponent,

        children: [
            {
                path: 'userdetails/:id',
                component: UserDetailsComponent
            }
        ]
    },
]

@NgModule({
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes)
     ],
    declarations: [ 
        UsersComponent,
        UserDetailsComponent
     ],

     exports: [
         UsersComponent,
         UserDetailsComponent
     ]
})
export class CustomerModule { }