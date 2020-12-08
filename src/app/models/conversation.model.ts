import { ProductModel } from './product.model';
import { UserModel } from './user.model';

export class ConversationModel {
    _id?: string;
    userOwner?: UserModel;
    userBuyer?: UserModel;
    product?: ProductModel;
    srcPhoto?: string;
    productName?: string;
    nameUserBuyer?: string;


}