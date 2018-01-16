import { Component, OnInit } from '@angular/core';
import { MessageService }    from '../message.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  /*
   The messageService that is injected here must be 
   'public' as it binded to the template for display.
   Angular only binds to public component properties.
   */
  constructor( public messageService: MessageService ) { }

  ngOnInit() {
  }

}
