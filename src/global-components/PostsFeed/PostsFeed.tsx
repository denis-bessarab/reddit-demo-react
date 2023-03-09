import React, {useEffect, useState} from "react";
import {PostBar} from "@/global-components/PostBar/PostBar";
import './postsFeed.scss'
import {posts} from "@/modules/HomeModule/models/posts";
import {PostInterface} from "@/modules/HomeModule/types/types";
import {Post} from "@/global-components/PostsFeed/Post";
import {MobilePostBar} from "@/global-components/MobilePostBar/MobilePostBar";


export const PostsFeed: React.FC = () => {
    const [postsData, setPostsData] = useState<PostInterface[]>([])

    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1200;

    useEffect(() => {
        setPostsData(posts)
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])
    return (
        <div id={'posts-feed'}>
            {width < breakpoint ? <MobilePostBar/> : <PostBar/>}
            {postsData.map(post => {
                return (
                    <Post key={post.id} id={post.id} commentsAmount={post.commentsAmount}
                          contentPicture={post.contentPicture} message={post.message} time={post.time}
                          username={post.username} usersAvatar={post.usersAvatar} votes={post.votes}/>
                )
            })}
            {width < breakpoint && <div id="next-field">
                <button>Next</button>
            </div>}
        </div>
    )
}