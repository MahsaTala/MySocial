import { faBookmark, faComment, faHeart } from "@fortawesome/free-regular-svg-icons";
import {faHeart as faFilledHeart , faBookmark as faFilledBookmark} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { supabase } from "../../../config/supabaseClient";
import styles from "../Main.module.css";
import LastComment from "./LastComment";

const PostCard = (props) => {
    //console.logprops
    const [isLiked ,setisLiked] = useState()
    const [isSaved ,setisSaved] = useState()
    const [comments,setComments]= useState([])

    useEffect(()=>{
        const getPostComment=async()=> {
            const { data, error } = await supabase.from("post_comments")
            .select("*")
            .eq("postId",props.postData.id)
            console.log(data);
            setComments(data)
        }
        getPostComment();
    },[])
  return <div className={`${styles.PostCard}`}>
      <div className={`${styles.PostCardOwnerInfo}`}>
          <img
           src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg" 
           alt="User Avatar" 
           className={`${styles.PostCardOwnerInfoAvatar}`} 
           />
           <div className={`${styles.PostCardOwnerInfoName}`}>Aghahe</div>
      </div>
      <div>
          <img className= {`${styles.postCardContentImage}`}
           src={props.postData.image}
           alt="Post Content"
           />
      </div>
      <div className={`${styles.postDescription}`}>
          {props.postData.description}
      </div>
      <div className={`${styles.postCardActions}`}>
          <span onClick={()=> setisLiked((prev) => !prev)}>
           <FontAwesomeIcon icon={isLiked ? faFilledHeart : faHeart} />
          </span>
          <span>
           <FontAwesomeIcon icon={faComment} />
          </span>
          <span onClick={()=> setisSaved((prev) => !prev)}>
           <FontAwesomeIcon icon={ isSaved  ? faFilledBookmark : faBookmark} />
          </span>
      
      </div>
      <div className={`${styles.postCardLastComment}`}>
          {comments.map((comment) =>  <LastComment 
          commentData={comment}/>)}
               </div>
      <div className={`${styles.postCardSendInstantComment}`}>
          <input type="text" placeholder="Write Your Comment Here"/>
          <button disabled={true} >Submit</button>
      </div>
  </div>;
};

export default PostCard;
