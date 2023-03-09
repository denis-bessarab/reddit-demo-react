import React, {useEffect, useState} from "react";
import {PostInterface} from "@/modules/HomeModule/types/types";
import {Icon} from "@iconify/react";
import './post.scss';

export const Post: React.FC<PostInterface> = ({
                                                  id,
                                                  username,
                                                  usersAvatar,
                                                  contentPicture,
                                                  message,
                                                  votes,
                                                  commentsAmount,
                                                  time
                                              }) => {
    const [data, setData] = useState<PostInterface | null>(null)
    const [isUpvoted, setIsUpvote] = useState<boolean>(false)
    const [isDownvoted, setIsDownvoted] = useState<boolean>(false)
    const [width, setWidth] = React.useState(window.innerWidth);
    const breakpoint = 1200;

    useEffect(() => {
        const postData: PostInterface = {
            id: id,
            username: username,
            usersAvatar: usersAvatar,
            contentPicture: contentPicture,
            message: message,
            commentsAmount: commentsAmount,
            votes: votes,
            time: time,
        }
        setData(postData)

        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);

        // Return a function from the effect that removes the event listener
        return () => window.removeEventListener("resize", handleWindowResize);
    }, [])

    function upvote() {
        if (data !== null && !isUpvoted && !isDownvoted) {
            data.votes++
            setIsUpvote(true)
        }
        if (data !== null && isDownvoted) {
            data.votes++
            setIsDownvoted(false)
        }
    }

    function downvote() {
        if (data !== null && !isUpvoted && !isDownvoted) {
            data.votes--
            setIsDownvoted(true)
        }
        if (data !== null && isUpvoted) {
            data.votes--
            setIsUpvote(false)
        }
    }


    return (
        <>
            {data !== null && <div id="post">
                <div className="user-information">
                    <div className="user-avatar" style={{backgroundImage: `url(${data.usersAvatar})`}}></div>
                    <span className="username">{data.username}</span>
                    <span className="time">{data.time}</span>
                </div>
                <div className="post-body">
                    <span className="message">{data.message}</span>
                    {data.contentPicture !== null &&
                        <img className="content-picture" src={data.contentPicture} alt=""/>}
                </div>
                <div className="post-utilities">
                    <div className="post-utility">
                        <Icon className="utility-icon" icon="ion:chatbox-ellipses-outline"/>
                        <span className="utility-copy">{data.commentsAmount} Comments</span>
                    </div>
                    <div className="post-utility">
                        <Icon className="utility-icon" icon="ion:share-outline"/>
                        <span className="utility-copy">Share</span>
                    </div>
                    <div className="post-utility">
                        <Icon className="utility-icon" icon="ion:bookmarks-outline"/>
                        <span className="utility-copy">Save</span>
                    </div>
                    <Icon className={"more-options-icon"} icon={"ion:ellipsis-horizontal-sharp"}></Icon>
                </div>
                <div className="votes">
                    <Icon
                        className={(isUpvoted ? "active votes-icon" : "votes-icon") + (width < breakpoint ? " nohover" : "")}
                        icon="ion:chevron-up-circle-outline" onClick={() => upvote()}/>
                    <span className="votes-copy">{data.votes}</span>
                    <Icon
                        className={(isDownvoted ? "active votes-icon" : "votes-icon") + (width < breakpoint ? " nohover" : "")}
                        icon="ion:chevron-down-circle-outline" onClick={() => downvote()}/>
                </div>
            </div>}
        </>
    )
}