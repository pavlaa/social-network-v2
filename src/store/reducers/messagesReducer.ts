import {MessagesAction, MessagesActionTypes, MessagesState} from "../../types/messagesTypes";

const defaultState: MessagesState = {
  messages: [
    {id: 1, name: "Me", date: "24 Nov 14:16", message: "It's me. Who it's here?"},
  ],
  friends: [
    {
      id: 1,
      name: "Pavel Ivanov",
      photo: "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
    },
    {
      id: 2,
      name: "Alex Vaber",
      photo: "https://wl-adme.cf.tsp.li/resize/728x/jpg/79e/c49/44a2895f18b7659744e7edf1a5.jpg"
    },
    {
      id: 3,
      name: "Igor Rapinskiy",
      photo: "https://happypik.ru/wp-content/uploads/2019/09/kartinki-sobak-s-nadpisjami13.jpg"
    },
    {
      id: 4,
      name: "Olga Tarasova",
      photo: "https://www.purinaone.ru/dog/sites/default/files/2020-07/zuby-u-sobak-mobile-min_1.jpg"
    }
  ]
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