"use client"
import React from 'react'
import { useState,useEffect } from 'react'
import PromptCard from './PromptCard'

const PromptCardList = ({data ,handleTagClick})=>{
      return (
        <div className='mt-16 prompt_layout'>
          {
            data.map((post)=>(
              <PromptCard
              key={post.id}
              post= {post}
              handleTagClick= {handleTagClick}
              />
            ))
          }
        </div>
      )
}
const Feed = () => {
  const [Posts, setPosts] = useState([])
  const [searchText, setsearch] = useState('')
  const handleSearchChange = (e)=>{
    
  }
  useEffect(() => {
    const fetchPosts = async ()=>{
     const response = await fetch('/api/prompt');
     const data = await response.json()
     setPosts(data)
    } 
    fetchPosts();
  }, [])
  
  return (
    <section className='feed'>
      <form className='relative w-full flex-center'>
       <input type="text"
       placeholder='Search for prompt' 
       value={searchText}
       onChange={handleSearchChange}
       required
       className='search_input peer'
       />
      </form>
      <PromptCardList
       data= {Posts}
       handleTagClick = {() => { }}
      />
      
    </section>
  )
}

export default Feed