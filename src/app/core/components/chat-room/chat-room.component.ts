import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MijapopService } from 'src/app/services/mijapop.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  idConversation: string = '';

  constructor(private route: ActivatedRoute, private mijapopService: MijapopService) { }

  ngOnInit(): void {
    this.loadData();
  }

  async loadData() {
     this.route.params.subscribe((params => {
      console.log('El id es:', params['idConversation']);
      console.log(params);
      this.idConversation = params['idConversation'];
    }));
  }

}
