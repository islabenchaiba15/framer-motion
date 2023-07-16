import NavbarComponent from '@/section/NavbarComponent'

import Image from 'next/image'
import styeles from '../styles'
import AboutComponent from '@/section/AboutComponent'
import ExploreComponent from '@/section/ExploreComponent'
import GetStarted from '@/section/GetStarted'
import NewFeature from '@/section/NewFeature'
import WorldComponent from '@/section/WorldComponent'
import InsightsComponent from '@/section/InsightsComponent'
import FooterComponent from '@/section/FooterComponent'
export default function Home() {
  return (
    <div className="bg-primary overflow-hidden">
      < NavbarComponent/>
      <AboutComponent/>
      <ExploreComponent/>
      <GetStarted/>
      <NewFeature/>
      <WorldComponent/>
      <InsightsComponent/>
      <FooterComponent/>
    </div>
    
  )
}
