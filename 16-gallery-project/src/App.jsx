
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './assets/components/Card';

const App = () => {


  const [userData, setUserData] = useState([]);
  const [index, setIndex] = useState(1)

  async function getData() {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=10`);
    setUserData(response.data);
    console.log(response.data);
  }

  useEffect(function(){
    getData()
  },[index])

  let printUserData =<h3 className='absolute text-gray-300 text-xs top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-semibold'>Loading...</h3>

  if (userData.length > 0) {
    printUserData = userData.map(function (elem, idx) {

      return <div key={idx}>
        <Card elem={elem}/>
      </div>
    })
  }

  return (
    <div className='bg-black text-white h-screen overflow-auto'>

      
      <div className='flex flex-wrap gap-4 h-[80%]'>
        {printUserData} 
      </div>

      <div className='flex justify-center items-center gap-6'>
        <button style={{opacity:index==1?0.5:1}}
         onClick={()=>{
          if(index>1){
            setIndex(index-1);
            setUserData([]);
          }
        }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95'>prev</button>
        <h1>Page{index}</h1>
        <button onClick={()=>{
           setIndex(index+1);
           setUserData([]);
        }} className='bg-amber-400 text-black rounded px-4 py-2 font-semibold cursor-pointer active:scale-95 '>next</button>
      </div>
    </div>

  )
}

export default App
