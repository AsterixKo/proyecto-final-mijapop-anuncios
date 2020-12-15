import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConversationModel } from 'src/app/models/conversation.model';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  currenUser: UserModel;
  conversations: ConversationModel[];

  constructor(private router: Router, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
    await this.mijapopService.findUserByEmail(localStorage.getItem('email')).toPromise().then((data) => {
      this.currenUser = data;
    }).catch((error) => {
      console.log('error:', error);
    });

    await this.mijapopService.findConversationsByUserOwnerIdOrUserBuyerId(this.currenUser._id, this.currenUser._id).toPromise().then((data) => {
      this.conversations = data;
    }).catch((error) => {
      console.log('error:', error);
    });
  }

  openChatRoom(idConversation: string) {
    this.router.navigate(['chat-room', idConversation]);
  }
}
