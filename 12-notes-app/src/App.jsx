import React, { useState } from 'react'

const App = () => {


  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');

  const [task, setTask] = useState([]);


  const submitHandler = (e) => {
    e.preventDefault();

    const copyTask = [...task];
    copyTask.push({ title, details });
    setTask(copyTask);

    setTitle('')
    setDetails('')
  }
  const deleteNote=(idx)=>{
    const copyTask=[...task];
    copyTask.splice(idx,1);
    setTask(copyTask);
  }

  return (
    <div className='h-screen lg:flex bg-black text-white p-10'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }}
        className='flex gap-4 lg:w-1/2 p-10 flex-col items-start '>
        <h1 className='text-4xl font-bold'>Add Notes</h1>

        <input
          type="text"
          placeholder='Enter Notes heading'
          className='px-5 py-2 w-full border-2 font-medium rounded outline-none'
          value={title}
          onChange={(e) => {
            setTitle(e.target.value)
          }}
        />

        <textarea
          type="text"
          className='px-5 h-32 py-2 w-full border-2 font-medium rounded outline-none'
          placeholder='Write Details'
          value={details}
          onChange={(e) => {
            setDetails(e.target.value)
          }}
        />
        <button
          className='bg-white active:scale-95 text-black px-5 py-2 rounded'
        >Add notes</button>
      </form>

      <div className='p-10 lg:w-1/2 lg:border-l-2 '>
        <h1 className='text-4xl font-bold'>RECENT NOTES</h1>
        <div className='flex flex-wrap items-start justify-start gap-5 mt-5 overflow-auto h-[90%]'>
          {task.map(function (elem, idx) {

            return <div key={idx} className='h-52 w-38 flex justify-between flex-col items-start relative rounded-xl px-3 py-5 bg-cover bg-[url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvcm00MzUtMDUyXzEuanBn.jpg)]'>
              <div>
                <h3 className='leading-tight text-xl font-bold text-black'>{elem.title}</h3>
                <p className='mt-2 leading-tight font-medium text-gray-700'>{elem.details}</p>
              </div>
              <button onClick={()=>{
                deleteNote(idx);
              }} className='w-full bg-red-600 cursor-pointer active:scale-95 text-xs rounded font-bold text-white'>delete</button>
            </div>

          })}


        </div>


      </div>
    </div>
  )
}

export default App
