import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html'
})
export class AppComponent {

  // [ ] means property binding - Component to DOM
  // ( ) means event binding - DOM to Component

  title = 'Customer App';
  name = 'Ryan';
  wardsColor = 'red';

  changeSuitColor() {
    this.wardsColor = this.wardsColor === 'red' ? 'blue' : 'red';
  }
}
