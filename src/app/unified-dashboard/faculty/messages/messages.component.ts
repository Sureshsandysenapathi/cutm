import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.css'
})
export class MessagesComponent {
  messages = [
    { sender: 'suresh', content: 'Can you clarify the assignment?', date: '2024-12-20' },
    { sender: 'mohan', content: 'I have uploaded my submission.', date: '2024-12-19' },
    { sender: 'rakesh', content: 'What is the grading criteria?', date: '2024-12-18' }
  ];
}
