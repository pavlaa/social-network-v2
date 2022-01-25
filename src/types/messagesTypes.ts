import {FriendTypes, MessageTypes} from "./types";


export interface MessagesState {
  messages: MessageTypes[];
  friends: FriendTypes[]
}
export enum MessagesActionTypes {
  SEND_MESSAGE = "SEND_MESSAGE"
}
interface SendMessageAction {
  type: MessagesActionTypes.SEND_MESSAGE;
  payload: string
}

export type MessagesAction = SendMessageAction;