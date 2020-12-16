import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ConversationModel } from 'src/app/models/conversation.model';
import { MessageModel } from 'src/app/models/message.model';
import { UserModel } from 'src/app/models/user.model';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  idConversation: string = '';
  conversation: ConversationModel;
  messages: MessageModel[];
  currentUser: UserModel;
  forma: FormGroup;
  formSubmitAttempt = false;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.loadData();
    this.createForm();
  }

  async loadData() {
    this.route.params.subscribe((params => {
      console.log('El id es:', params['idConversation']);
      console.log(params);
      this.idConversation = params['idConversation'];
    }));

    await this.mijapopService.findConversationById(this.idConversation).toPromise().then((data) => {
      this.conversation = data;
    }).catch((error) => {
      console.log('error:', error);
    });

    await this.mijapopService.findUserByEmail(localStorage.getItem('email')).toPromise().then((data) => {
      this.currentUser = data;
    }).catch((error) => {
      console.log('error:', error);
    });

    await this.mijapopService.findMessagesByConversationId(this.conversation._id).toPromise().then((data) => {
      this.messages = data;
    }).catch((error) => {
      console.log('error:', error);
    });
  }

  createForm() {
    this.forma = this.fb.group({
      text: ['', []]
    });
  }

  async saveForm() {
    console.log('Guardando nuevo mensaje');
    this.formSubmitAttempt = true;
    console.log(this.forma);

    if (this.forma.status === 'VALID') {
      if (this.forma.get('text').value !== '') {
        const messageNew = new MessageModel;
        messageNew.conversation = this.conversation;
        messageNew.user = this.currentUser;
        messageNew.userName = this.currentUser.name;
        messageNew.text = this.forma.get('text').value;
        messageNew.date = new Date();
        messageNew.isChecked = false;
        messageNew.isOwner = this.conversation.userOwner._id === this.currentUser._id ? true : false;

        await this.mijapopService.addNewMessage(messageNew).toPromise().then((data) => {
          console.log('Mensaje añadido');
          this.forma.reset();
        }).catch((error) => {
          console.log('error:', error);
        });

        await this.mijapopService.findMessagesByConversationId(this.conversation._id).toPromise().then((data) => {
          this.messages = data;
        }).catch((error) => {
          console.log('error:', error);
        });
      }

    } else {
      if (this.forma.status === 'INVALID') {
        console.log('Formulario INVALID');
      }
    }
  }

  isFieldInvalid(field: string) {
    return (this.forma.get(field).invalid && this.forma.get(field).touched) ||
      (this.forma.get(field).untouched && this.formSubmitAttempt);
  }

}
