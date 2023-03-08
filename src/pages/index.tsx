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
import ScrollList from '@/components/ui/ScrollList'
import ResizeSensor from '@/lib/resize/ResizeSensor'
import Head from 'next/head'
import { useEffect, useRef } from 'react'
// import { Inter } from 'next/font/google'

// Minimum distance between note and previewBoard
const DIS_NOTE_PREVIEW = 32;

export default function Home() {
  const init = useRef<boolean>(false);

  useEffect(()=>{
    if (!init.current){
      init.current = true;
      const slideNoteElement = document.getElementById("slideNote");
      const previewBoardElement = document.getElementById("previewBoard");

      const windowWidthInit = window.innerWidth;
      const windowHeightInit = window.innerHeight;
      let windowWidthCur = 0;
      let windowHeightCur = 0;

      if (slideNoteElement) {
        let heightNoteInit = 0;
        new ResizeSensor(slideNoteElement, (e) => {
          if (!heightNoteInit) {
            heightNoteInit = e.height;
          }
          if (previewBoardElement) {
            const corr = previewBoardElement.getBoundingClientRect();
            const heightCorr = window.innerHeight - corr.top - e.height - DIS_NOTE_PREVIEW;
            const heightBoardChange = windowHeightInit * window.innerWidth / windowWidthInit;
            // The previewBoard height depends on the distance from the top of the web page to the top of the note
            const widthBoardChange = windowWidthInit * (windowHeightInit - e.height + heightNoteInit) / windowHeightInit;

            previewBoardElement.style.width = `${Math.floor(Math.min(window.innerWidth, widthBoardChange) * 3 / 5)}px`;
            previewBoardElement.style.height = `${Math.min(Math.floor(Math.min(window.innerHeight, heightBoardChange) * 2 / 3), heightCorr)}px`;
          }
        })
      }

      if (previewBoardElement) {
        const width = Math.floor(windowWidthInit * 3 / 5);
        const height = Math.floor(windowHeightInit * 2 / 3);
        previewBoardElement.style.width = `${width}px`;
        previewBoardElement.style.height = `${height}px`;
        windowWidthCur = width;
        windowHeightCur = height;
      }

      window.addEventListener('resize', () => {
        if (previewBoardElement) {
          if (windowWidthCur !== window.innerWidth || windowHeightCur !== window.innerHeight) {
            const heightBoardChange = windowHeightInit * window.innerWidth / windowWidthInit;
            const widthBoardChange = windowWidthInit * window.innerHeight / windowHeightInit;

            if (slideNoteElement) {
              const corr = previewBoardElement.getBoundingClientRect();
              const heightCorr = window.innerHeight - corr.top - slideNoteElement.offsetHeight - DIS_NOTE_PREVIEW;

              previewBoardElement.style.width = `${Math.floor(Math.min(window.innerWidth, widthBoardChange) * 3 / 5)}px`;
              previewBoardElement.style.height = `${Math.min(Math.floor(Math.min(window.innerHeight, heightBoardChange) * 2 / 3), heightCorr)}px`;
            }
          }
          windowWidthCur = window.innerWidth;
          windowHeightCur = window.innerHeight;
        }
      })

    }
  },[])


  return (
    <>
      <Head>
        <title>Love Present</title>
        <meta name="description" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='bg-gray-500 relative h-screen overflow-hidden'>
        <div className='absolute w-[12%] bg-blue-500 h-full ml-0 top-28'
          id="slideListParent">
         <ScrollList>
            <SlideList />
         </ScrollList>
        </div>
        <div className='absolute w-full h-14'>
          <Navbar />
        </div>
        <div className='bg-red-500 h-14 absolute w-full top-14'>
          <div><CreateSlide /></div>
          <div><ImportSlide /></div>
          <div><ExampleSlide /></div>
          <div><ThemeSlide /></div>
          <div><Setting /></div>
        </div>

        <div className='absolute top-28 left-[12%] right-[25%] bg-gray-500 flex justify-center  '>
          <PreviewBoard />
        </div>

        <div className='absolute left-[12%] right-[25%] bg-yellow-500 bottom-0 z-20' id="slideNote">
            <SlideNote />
        </div>

        <div className='absolute w-[25%] bg-purple-500 h-[90%] right-0 top-28'>
          <ControlPanel />
        </div>
      </div>
    </>
  )
}
