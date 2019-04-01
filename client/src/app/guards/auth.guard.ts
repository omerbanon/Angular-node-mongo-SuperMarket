import { AuthService } from "./../services/auth.service";
import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthGuard {
  constructor(private authService: AuthService) {}
  canActivate() {
    return this.authService.checkSession();
  }
}
