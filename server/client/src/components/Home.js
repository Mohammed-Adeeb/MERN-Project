import React,{useState,useEffect} from 'react'

const Home = () => {
  const [userName,setUserName]=useState('')
  const [show,setShow]=useState(false);
  
  const userHome=async ()=>{
    try {
      const res = await fetch('/getdata',{
        method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
      })
    
    const data =await res.json();
    console.log(data);
    setUserName(data.name);
    setShow(true);
    if(!res.status===200){
      const error=new Error(res.error);
      throw error;
    }
    
    
    } catch (err) {
      console.log(err)
      
    }
      }
    
      useEffect(()=>{
    userHome();
      },[]);
  
  return (
    <>
    <div className='home-page'>
    <div className='home-div'>
    <p className='pt-5'>Welocome</p>
        <h1 className='pt-5'>{userName}</h1>
        <h2>{show ?'Happy to see you back':'We are the MERN developers'}</h2>
    </div>
    </div>
    </>
  )
}

export default Home;