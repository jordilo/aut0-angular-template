import { Component } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { AuthUser } from '../../auth/auth';
import { filter } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: 'profile.component.html',
  styleUrls: ['profile.component.css']
})
export class ProfileComponent {

  public user$: Observable<AuthUser>;
  constructor(private auth: AuthService) {

    this.user$ = this.auth.onUserLogin$.pipe(filter((user) => user !== null));
  }
}
