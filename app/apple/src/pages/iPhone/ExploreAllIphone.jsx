import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import IphoneViewBanner from './Usable/IphoneViewBanner'
import IPhonePanel from './Usable/IPhonePanels'
import {useContext} from "react";
import {MobileContext} from "../../context.jsx";

const ExploreAllIphone=()=>{
    const mobile = useContext(MobileContext)
    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
            <Nav mobile={mobile}/>
            <IphoneViewBanner color='white' price='From $799 or $33.29/mo. for 24 mo. before trade‑in2' iphone='iPhone 14' slogan='Wonderfull.' img='https://spidersweb.pl/_next/image?url=https%3A%2F%2Focs-pl.oktawave.com%2Fv1%2FAUTH_2887234e-384a-4873-8bc5-405211db13a2%2Fspidersweb%2F2023%2F03%2Fiphone-14-plus-kolory-1.jpeg&w=1200&q=75'/>
            <IphoneViewBanner color='black' price='From $999 or $41.62/mo. for 24 mo. before trade‑in2' iphone='iPhone 14 Pro' slogan='Pro. Beyond.' img='https://www.computerworld.pl/g1/news/thumbnails/4/3/433552_hero_cj6i78tzkp8i_large_jpg_95_adaptiveresize_830x425.webp'/>
            <IphoneViewBanner color='rgb(245,245,245)' price='From $429 or $17.87/mo. for 24 mo. before trade‑in2' iphone='iPhone SE' slogan='Love the power. Love the price.' img='https://m.media-amazon.com/images/I/71q4wfu7+HL._AC_SL1500_.jpg'/>
            <IPhonePanel mobile={mobile}/>
            <Footer mobile={mobile} />
        </div>
    )
}

ExploreAllIphone.propTypes={
    mobile: PropTypes.object
}

export default ExploreAllIphone