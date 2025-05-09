import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  imports: [FormsModule],
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent {
  message: string = '';
  isHidden: boolean = false;

  sendMessage() {
    if (this.message.trim()) {
      const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(this.message)}`;
      window.open(whatsappUrl, '_blank');
      this.message = '';
    }
  }
}
