import Events from '@/components/Events'
import Speakers from '@/components/Speakers'
import Landing from '@/components/Landing'
import About from '@/components/About'
import Stats from '@/components/Stats'
import Initiatives from '@/components/Initiatives'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import { speakersData } from '@/data/speakers'

export default function Home() {
  return (
    <div className='w-full bg-black'>
      <Navbar />
      <div className='w-full flex flex-col bg-black'>
        <Landing />
        
        <About />
        <Stats />
        <Initiatives />
        <Events />
        <Speakers speakers={speakersData} />
        <Footer />
      </div>
    </div>
  )
}
