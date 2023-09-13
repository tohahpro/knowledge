
import './App.css'
import '../src/index.css'
import Blogs from './Component/Blogs/Blogs'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import { useState } from 'react'
import Header from './Component/Header/Header'


function App() {
  const [bookmarks, setBookmarks] = useState([])

  // useState use for blog reading time. jehetu ekhane kono array hobe na. ekhane hobe time. tai default time (0) hobe
  const [readingTime, setReadingTime] = useState(0)

  const handleAddToBookmark = (blog) => {
    // console.log(blog);
    const newBookmarks = [...bookmarks, blog]
    setBookmarks(newBookmarks)
  }


  // click function for time 
  const handleMarkAsRead = (time) => {
    // console.log('reading time', time);
    setReadingTime(readingTime + time)

  }

  return (
    <>

      <Header></Header>
      <div className="md:flex  p-4 max-w-7xl mx-auto">
        <Blogs handleAddToBookmark={handleAddToBookmark} handleMarkAsRead={handleMarkAsRead}></Blogs>

        <Bookmarks bookmarks={bookmarks} readingTime={readingTime}></Bookmarks>
      </div>


    </>
  )
}

export default App
