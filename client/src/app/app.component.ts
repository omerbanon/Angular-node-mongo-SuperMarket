import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client';
  @Input() hasBackdrop:any=false;
@Input() mode:'push';
@Input() drawer:any;
showFiller = false;
}
