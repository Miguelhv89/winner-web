import { Component } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './components/chat/chat.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeaderComponent, FooterComponent, ChatComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Winner Trading';
  isHome: boolean = false;

  constructor(private router: Router) {
    // Suscribirse a los cambios de la ruta
    this.router.events.subscribe(() => {
      this.isHome = (this.router.url === "/"); // Obtiene la ruta actual
    });
  }
}
