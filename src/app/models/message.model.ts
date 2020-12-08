import { ConversationModel } from './conversation.model';
import { UserModel } from './user.model';

export class MessageModel {
    _id?: string;
    conversation?: ConversationModel;
    user?: UserModel;
    userName?: string;
    text?: string;
    date?: Date;
    isChecked?: boolean;
    isOwner?: boolean;

}

