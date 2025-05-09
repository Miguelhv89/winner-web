import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

export interface Partner {
  title: string;
  yearFundation: string;
  imageUrl: string;
  description: string;
  content: string;
  imagePosition: 'left' | 'right';
}

@Component({
  selector: 'app-about',
  imports: [CommonModule],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {
  infoPartners: Partner[] = [];
  ngOnInit(): void {
    this.infoPartners = [
      {
        title: 'Winner Trading',
        imageUrl: 'images/Image-none.png',
        yearFundation: 'Fund. 1994',
        description: 'Body text for your whole article or post. We\'ll put in some lorem ipsum to show how a filled-out page might look.',
        content: `Excepteur efficient emerging, minim veniam aniss aute carefully monitored Otter. Qui international fed-batch climate change, domestic rosa. Reiciendis
        indicate Content. Qui, international fed-batch climate ui. Punctual adipiscing, enim reprehenderit tempor incididunt ut. Non Exclusive izakaya charming
        Scandinavian impeccable aute quality of life. Vel posse propriété. Metuserna meditate discerning. Qui wardrobing, ex portster destination Toto remarkable. Non
        Excepteur basset hound. Zurich sleepy perfect consectetur.`,
        imagePosition: 'right'
      },
      {
        title: 'ByWin',
        imageUrl: 'images/Image-none.png',
        yearFundation: 'Fund. 2020',
        description: 'Body text for your whole article or post. We\'ll put in some lorem ipsum to show how a filled-out page might look.',
        content: `Excepteur efficient emerging, minim veniam aniss aute carefully monitored Otter. Qui international fed-batch climate change, domestic rosa. Reiciendis
        indicate Content. Qui, international fed-batch climate ui. Punctual adipiscing, enim reprehenderit tempor incididunt ut. Non Exclusive izakaya charming
        Scandinavian impeccable aute quality of life. Vel posse propriété. Metuserna meditate discerning. Qui wardrobing, ex portster destination Toto remarkable. Non
        Excepteur basset hound. Zurich sleepy perfect consectetur.`,
        imagePosition: 'left'
      },
      {
        title: 'OneCare',
        imageUrl: 'images/Image-none.png',
        yearFundation: 'Fund. 2024',
        description: 'Body text for your whole article or post. We\'ll put in some lorem ipsum to show how a filled-out page might look.',
        content: `Excepteur efficient emerging, minim veniam aniss aute carefully monitored Otter. Qui international fed-batch climate change, domestic rosa. Reiciendis
        indicate Content. Qui, international fed-batch climate ui. Punctual adipiscing, enim reprehenderit tempor incididunt ut. Non Exclusive izakaya charming
        Scandinavian impeccable aute quality of life. Vel posse propriété. Metuserna meditate discerning. Qui wardrobing, ex portster destination Toto remarkable. Non
        Excepteur basset hound. Zurich sleepy perfect consectetur.`,
        imagePosition: 'right'
      },
      {
        title: 'NOX',
        imageUrl: 'images/Image-none.png',
        yearFundation: 'Fund. 2025',
        description: 'Body text for your whole article or post. We\'ll put in some lorem ipsum to show how a filled-out page might look.',
        content: `Excepteur efficient emerging, minim veniam aniss aute carefully monitored Otter. Qui international fed-batch climate change, domestic rosa. Reiciendis
        indicate Content. Qui, international fed-batch climate ui. Punctual adipiscing, enim reprehenderit tempor incididunt ut. Non Exclusive izakaya charming
        Scandinavian impeccable aute quality of life. Vel posse propriété. Metuserna meditate discerning. Qui wardrobing, ex portster destination Toto remarkable. Non
        Excepteur basset hound. Zurich sleepy perfect consectetur.`,
        imagePosition: 'left'
      }
    ];
  }
}
