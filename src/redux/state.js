import { rerenderEntireTree } from '../render';

let state = {
    profilePage: {
        posts: [
            { id: 1, message: 'Hi, how are you?', likeCount: 15 },
            { id: 2, message: "It's my first post", likeCount: 20 }
        ],
        newPostText: "Yo"
    },
    dialogsPage: {
        dialogsData: [
            { id: 1, name: "Artem" },
            { id: 2, name: "Butuz" },
            { id: 3, name: "Sanchez" },
            { id: 4, name: "Seriy" },
            { id: 5, name: "Egor" },
            { id: 6, name: "Andrey" }
        ],
        messages: [
            { id: 1, item: 'Hi' },
            { id: 2, item: 'How is your it-kamasutra?' },
            { id: 3, item: 'Yo' },
        ]
    },
    navBar: {
        imgData: [
            { adress: "https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png", name: "Andrey" },
            { adress: "https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png", name: "Butuz" },
            { adress: "https://davinci22.ru/wp-content/uploads/2014/01/default-avatar-m_1920.png", name: "Sanchez" }
        ]
    }

}

window.state = state;

export let addPost = () => {
    let newPost = {
        id: 5,
        message: state.profilePage.newPostText,
        likeCount: 0
    };
    state.profilePage.posts.push(newPost);
    state.profilePage.newPostText = '';
    rerenderEntireTree(state);
}

export let updateNewPostText = (newText) => {
    state.profilePage.newPostText = newText;
    rerenderEntireTree(state);
}


export default state;