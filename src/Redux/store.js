
import dialogReducer from "./dialogReducer"
import navigationReducer from "./navigationReducer"
import profileReducer from "./profileReducer"

export let store = {
    _state:{
        dialogPage:{
            dialogData:[
                {userID:1,name:'Saved message',},
                {userID:2,name:'Vanya',},
                {userID:3,name:'Bodya',},
            ],
            messageData:[
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
        },
        profilePage:{
            postsData:[
                {name:'Rostyslav',postText:'I`m learn JavaScript(',likeCount:2},
                {name:'Vanya',postText:'Go smoke hookah',likeCount:5},
                {name:'Bodya',postText:'IT,IT,IT-kamasutra!',likeCount:7},
            ],
            postText: 'Enter here your text',
        },
        navigation:[
            {route:'/profile',text:'My page'},
            {route:'/news',text:'News'},
            {route:'/message',text:'Message'},
            {route:'/friends',text:'Friends'},
            {route:'/communities',text:'Communities'},
            {route:'/photo',text:'Photo'},
            {route:'/music',text:'Music'},
        ]
    },
    subscribe(observer) {
        this.renderTree = observer 
    },
    renderTree() {
        console.log('State changed')
    },
    getState(){
        return this._state
    },
    dispatch(action){
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.dialogPage = dialogReducer(this._state.dialogPage, action)
        this._state.navigation = navigationReducer(this._state.navigation, action)
        this.renderTree(this._state)
    },
}
window.store = store