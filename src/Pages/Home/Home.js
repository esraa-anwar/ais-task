import React ,{useEffect}from 'react'
import BirthCard from '../../Components/BirthCard/BirthCard'
import Card from '../../Components/cards/Card'
import InputContainer from '../../Components/Input-container/InputContainer'
import SideNavbar from '../../Components/side-nav/SideNavbar'
import "./styles.scss"
const Home = () => {
    useEffect(()=>{
        document.body.style.backgroundColor = "#f3f6f9"
      },[])
  return (
    <div className='home'>
    <div className='content'>
    <InputContainer/>
    <div className='home-content'>
<Card/>

    </div>
    <div className='section-two'>
    <BirthCard name={"النسبة بين الذكور والإناث للوفيات"} male={"12%"} female={"88%"}/>

<BirthCard name={"النسبة بين الذكور والإناث للمواليد"}  male={"12%"} female={"88%"}/>
    </div>
    </div>
    <SideNavbar/>
    </div>
  )
}

export default Home