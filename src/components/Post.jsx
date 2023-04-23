import React, { useEffect, useState } from 'react'

export const Post = () => {
    
    const [postData,setPostData]=useState([])

    useEffect(()=>{
        getPost()
    },[])

    async function getPost(){
        const data = await fetch('https://dummyjson.com/posts')
        const json = await data.json()
        console.log(json.posts)
        setPostData(json.posts)
    }
  return (
    <div style={{textAlign:'center'}}>
        <h1 style={{color:'red',textDecoration:'underline'}}>Post Title</h1>
        {postData.map((item)=>{
            return(
                <div key={item.id}>
                    <h2>Title:-<span style={{color:'blue'}}>{item.title}</span></h2>
                </div>
            )
        })}
    </div>
  )
}