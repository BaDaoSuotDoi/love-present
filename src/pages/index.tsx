import CreateSlide from '@/components/action/CreateSlide'
import ImportSlide from '@/components/action/ImportSlide'
import ControlPanel from '@/components/controlPanel/ControlPanel'
import Navbar from '@/components/navbar/Navbar'
import SlideNote from '@/components/note/SlideNote'
import Setting from '@/components/personal/Setting'
import PreviewBoard from '@/components/previewBoard/PreviewBoard'
import ExampleSlide from '@/components/resource/ExampleSlide'
import ThemeSlide from '@/components/resource/ThemeSlide'
import SlideList from '@/components/slideList/SlideList'
import useWindowSize from '@/hooks/useWindowSize'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
// import { Inter } from 'next/font/google'

export default function Home() {
  const [width, height] = useWindowSize();

  const previewBoardRef = useRef<HTMLElement | null>(null);
  const widthBoardPre = useRef<number>(0);
  const heightBoardPre = useRef<number>(0);

  useEffect(() => {
    if (!previewBoardRef.current) {
      previewBoardRef.current = document.getElementById("previewBoard")
    }

    const previewBoardElement = previewBoardRef.current;
    if (previewBoardElement){
      // width change
      if (widthBoardPre.current != width){
        previewBoardElement.style.width = `${width}px`;
        previewBoardElement.style.height = `${Math.floor(width * 1 / 3)}px`;
      }else if(heightBoardPre.current != height){
        // height change
        previewBoardElement.style.width = `${height * 3}px`;
        previewBoardElement.style.height = `${height}px`;
      }
      widthBoardPre.current = width;
      heightBoardPre.current = height;
    }
  }, [width, height])

  return (
    <>
      <Head>
        <title>Love Present</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-500 relative h-screen overflow-hidden'>
        <div>
          <Navbar />
        </div>
        <div className='bg-red-500 h-14'>
          <div><CreateSlide /></div>
          <div><ImportSlide /></div>
          <div><ExampleSlide /></div>
          <div><ThemeSlide /></div>
          <div><Setting /></div>
        </div>
        <div className='absolute w-[12%] bg-blue-500 h-full ml-0'>
          <SlideList />
        </div>

        <div className='absolute top-28 left-[12%] right-[25%] h-[60%] bg-gray-500 flex justify-center '>
          <PreviewBoard />
        </div>

        <div className='absolute left-[12%] right-[25%] bg-yellow-500 bottom-0 z-20'>
          <SlideNote />
        </div>

        <div className='absolute w-[25%] bg-purple-500 h-full right-0 '>
          <ControlPanel />
        </div>
      </div>
    </>
  )
}
