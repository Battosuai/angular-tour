import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { UserComponent } from './UserComponent/user.component';
import { CommentsComponent } from './CommentsComponent/comments.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserComponent, CommentsComponent, RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'angular-tour';
  showUser = false;
  operatingSystems = [
    { id: 'win', name: 'Windows' },
    { id: 'osx', name: 'MacOS' },
    { id: 'linux', name: 'Linux' },
  ];
  isEditable = true;
  message = '';

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  addItem(data: string) {
    console.log(data);
  }
}
