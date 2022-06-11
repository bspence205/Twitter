import React from 'react'
import { useState } from 'react'
import {
    PhotographIcon,
    SearchCircleIcon,
    EmojiHappyIcon,
    CalendarIcon,
    LocationMarkerIcon
} from '@heroicons/react/outline' 
import { useSession } from 'next-auth/react'


function TweetBox() {

    const [input, setInput] = useState<string>('')
    const { data: session } = useSession()


  return (
    <div className='flex space-x-2 p-5'>
        <img
        className='mt-4 h-14 w-14 rounded-full object-cover'
        src={session?.user?.image || "icons8-name-48.png"} alt=""/>

        <div className='flex flex-1 items-center pl-2'>
            <form className='flex flex-1 flex-col' action="">
                <input 
                value={input}
                onChange={(e) => setInput(e.target.value)}
                className='h-24 w-full text-xl outline-none placeholder:text-xl' 
                type="text" 
                placeholder="What's going on?" />
                <div className='flex items-center'>
                    <div className='flex space-x-2 text-twitter flex-1'>
                        <PhotographIcon className='h-5 w-5 cursor-pointer first-letter
                        transition-transform duration-150 ease-out hover:scale-150' />
                        <SearchCircleIcon className='h-5 w-5' />
                        <EmojiHappyIcon className='h-5 w-5' />
                        <CalendarIcon className='h-5 w-5' />
                        <LocationMarkerIcon className='h-5 w-5' />
                    </div>
                    <button disabled={!input || !session} 
                    className='bg-twitter px-5 py-2 font-bold
                    text-white rounded-full disabled:opacity-40'>Tweet</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default TweetBox