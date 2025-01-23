import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component'


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,
  HomePageComponent],
  templateUrl: './app.component.html',
  standalone: true,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Web-Communication-Project';
}
