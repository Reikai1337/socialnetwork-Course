const UPDATE_DIALOG_TEXT = 'UPDATE-DIALOG-TEXT'
export const updateDialogTextActionCreator = (text) =>({type: UPDATE_DIALOG_TEXT, text: text})

const SEND_MESSAGE = 'SEND-MESSAGE'
export const sendMessageActionCreator = () =>({type: SEND_MESSAGE})

const CHANGE_CHAT_INDEX = 'CHANGE-CHAT-INDEX'
export const changeChatIndexActionCreator = (index) => ({type: CHANGE_CHAT_INDEX, newChatIndex: index})

const CLEAR_TEXTAREA = 'CLEAR-TEXTAREA'
export const clearTextareaActinCreator = () => ({type: CLEAR_TEXTAREA})

let initialState = {
    dialogData:[
        {userID:1,name:'Saved message',},
        {userID:2,name:'Vanya',},
        {userID:3,name:'Bodya',},
    ],
    messageData:
    [
        [
            {
                user:'me',
                text:['Hello, how are you?','Im fine, and you?','Good!','example example '],
            },
            {
                user:'interlocutor',
                text:['Go play football?','No, I don`t do anal=)'],
            },
            {
                user:'interlocutor',
                text:['I find you!','ok =(']
            },
            {
                user:'me',
                text:['Hello, how are you?','Im fine, and you?','Good!','example example '],
            },
        ],
        [
            {
                user:'me',
                text:['example1'],
            },
            {
                user:'interlocutor',
                text:['example2'],
            },
            {
                user:'interlocutor',
                text:['example3'],
            },
            {
                user:'me',
                text:['example4'],
            },
        ],
        [
            {
                user:'me',
                text:['example5'],
            },
            {
                user:'interlocutor',
                text:['example6'],
            },
            {
                user:'interlocutor',
                text:['example7'],
            },
            {
                user:'me',
                text:['example8'],
            },
        ],
    ],
    dialogText: 'Write a message...',
    chatIndex: undefined,
}

const dialogReducer = (dialogPage = initialState,action) => {
    switch(action.type){
        case UPDATE_DIALOG_TEXT:{
        console.log(action.text)
        return {
            ...dialogPage,
            dialogText: action.text,
        }
        }
        // ======================================================================//
        case SEND_MESSAGE:
            if(dialogPage.chatIndex !== undefined){
                let message = {
                    user: 'me',
                    text: dialogPage.dialogText,
                }

                let dialogPageCopy = {
                    ...dialogPage,
                    messageData:[
                        ...dialogPage.messageData
                    ],
                    dialogText: 'Write a message...'
                }
                dialogPageCopy.messageData[dialogPage.chatIndex-1] = [
                    ...dialogPage.messageData[dialogPage.chatIndex-1],
                    message
                ]

                return dialogPageCopy
            }
            else {
                alert('Select a interlocutor')
                break;
            }
        // ======================================================================//
        case CHANGE_CHAT_INDEX:{
            console.log(action.newChatIndex)
            return {
                ...dialogPage,
                chatIndex: action.newChatIndex,
            }
        }
        // ======================================================================//
        case CLEAR_TEXTAREA:{
            return {
                ...dialogPage,
                dialogText: '',
            }
        }
        default: return dialogPage
    }
}
export default dialogReducer