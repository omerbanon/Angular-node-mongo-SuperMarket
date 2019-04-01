import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CanleaveGuard   {
  
    canDeactivate(myComp)
    {
      if(myComp.portForm.dirty)
      {
          let resultFromUser= confirm('are you sure???');
          return resultFromUser;
      }
      else
      {
          return true;
      }
    }
}
