import React from 'react'

const LastComment = (props) => {
    return (
      <div>
          <span style={{fontWeight:"bold"}}>
              {props.commentData.userId}
          </span>
          <span>
              {props.commentData.comment}
          </span>
      </div>
    )
}

export default LastComment;