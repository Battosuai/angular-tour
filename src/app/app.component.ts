import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import {
  UpperCasePipe,
  DecimalPipe,
  CurrencyPipe,
  DatePipe,
} from '@angular/common';
import { ReversePipe } from './reverse.pipe';
import { UserComponent } from './UserComponent/user.component';
import { CommentsComponent } from './CommentsComponent/comments.component';
import { CarService } from './car.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    UserComponent,
    CommentsComponent,
    RouterLink,
    UpperCasePipe,
    DecimalPipe,
    CurrencyPipe,
    DatePipe,
    ReversePipe,
  ],
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
  display = '';
  // carService = inject(CarService);
  loudMessage = 'we think you are doing great!';
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
  word = 'You are a champion';

  constructor(private carService: CarService) {
    this.display = this.carService.getCars().join(' ⭐️ ');
  }

  onMouseOver() {
    this.message = 'Way to go 🚀';
  }

  addItem(data: string) {
    console.log(data);
  }
}
