import contentPicture1 from "@/assets/images/posts/contentPicture1.jpg"
import contentPicture2 from "@/assets/images/posts/contentPicture2.jpg"
import avatar1 from "@/assets/images/posts/avatar1.jpg"
import avatar2 from "@/assets/images/posts/avatar2.jpg"
import avatar3 from "@/assets/images/posts/avatar3.jpg"

export const posts = [
    {
        id:1,
        username: "VideoGames",
        usersAvatar: avatar1,
        contentPicture: contentPicture1,
        message: "What do you think about the new game based on the Harry Potter books and movies?",
        votes: 10,
        commentsAmount: 3,
        time: "5 minutes ago"
    },
    {
        id:2,
        username: "Green",
        usersAvatar: avatar2,
        contentPicture: null,
        message: "A probe is about to be sent into space. On board will be a disk and a computer with a message from humanity. What are you sending?",
        votes: 2,
        commentsAmount: 1,
        time: "7 minutes ago"
    },
    {
        id:3,
        username: "Movie",
        usersAvatar: avatar3,
        contentPicture: contentPicture2,
        message: "What's your favorite shrek movie?",
        votes: 33,
        commentsAmount: 15,
        time: "25 minutes ago"
    },
]