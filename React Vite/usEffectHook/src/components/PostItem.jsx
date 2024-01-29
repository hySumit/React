import React from "react";


const PostItem =({post})=>{
return(
    <div className="grid">
        {post.map((item)=>(
            <div key={item.id} >
                <p> Id : {item.id} </p>
                <p> title : {item.title} </p>
                <p>Body : {item.body}</p>
            </div>
        ))}
    </div>
)
}

export default PostItem