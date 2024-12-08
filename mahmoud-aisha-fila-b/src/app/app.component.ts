import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';
import { FourthComponent } from './fourth/fourth.component';
import { FifthComponent } from './fifth/fifth.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SecondComponent, ThirdComponent, FourthComponent, FifthComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mahmoud-aisha-fila-b';
}
