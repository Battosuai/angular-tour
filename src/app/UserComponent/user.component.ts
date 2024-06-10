import { Component, EventEmitter, Input, Output } from '@angular/core';

import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-user',
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
  imports: [NgOptimizedImage],
})
export class UserComponent {
  username = 'Battousai';
  @Input() occupation = 'Developer';
  @Output() addItemEvent = new EventEmitter<string>();
  logoUrl = 'https://placehold.co/600x400';
  logoAlt = 'Angular logo';

  addItem() {
    this.addItemEvent.emit('🐢');
  }
}
