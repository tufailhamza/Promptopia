
'use client'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import Profile from '@components/Profile'
const Profile2 = () => {
    const {data : session} = useSession()
    const [Posts, setPosts] = useState([])
    useEffect(() => {
        const fetchPosts = async ()=>{
         const response = await fetch('/api/prompt');
         const data = await response.json()
         setPosts(data)
        } 
       if (session?.user.id) {
        fetchPosts();
       }
       
      }, [])
    const handleEdit = ()=>{

    }
    const handleDelete = () => {

    }
  return (
   <Profile
   name= "My"
   desc = "Welcome to your personalized profile page"
   data = {Posts}
   setPosts= {setPosts}
   handleEdit= {handleEdit}
   handleDelete={handleDelete}
   />
  )
}

export default Profile2