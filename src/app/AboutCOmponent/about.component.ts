import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormComponent } from '../FormComponent/form.component';
import { ReactiveFormComponent } from '../ReactiveFormComponent/reactive-form.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [RouterLink, FormComponent, ReactiveFormComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css',
})
export class AboutComponent {}
