import {MessagesAction, MessagesActionTypes, MessagesState} from "../../types/messagesTypes";

const defaultState: MessagesState = {
  messages: [
    {id: 1, name: "Me", date: "24 Nov 14:16", message: "It's me. Who it's here?"},
  ],
}

export const messagesReducer = (state = defaultState, action: MessagesAction): MessagesState => {
  switch (action.type) {
    case MessagesActionTypes.SEND_MESSAGE:
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
      const date = new Date();
      const message = {
        id: +date,
        name: 'Pavel',
        date: `${ date.getDate() } ${ months[date.getMonth()] } ${ date.getHours() }:${ date.getMinutes() }`,
        message: action.payload
      }
      return {...state, messages: [message, ...state.messages]}
    default:
      return state
  }
}