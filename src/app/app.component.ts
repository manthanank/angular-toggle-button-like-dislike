import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  toggle = true;
  status = 'Like';
  data = '';
  toggleButton() {
    this.toggle = !this.toggle;
    this.status = this.toggle ? 'Like' : 'Dislike';
    this.data = this.toggle ? 'Disliked' : 'Liked';
    console.log(this.status);
  }
}
