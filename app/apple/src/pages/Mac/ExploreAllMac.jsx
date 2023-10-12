import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import MacViewBanner from './Usable/MacViewBanner'
import MacPanel from './Usable/MacPanels'
import {useContext} from "react";
import {MobileContext} from "../../context.jsx";

const ExploreAllMac=()=>{
    const mobile = useContext(MobileContext)
    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <MacViewBanner price='From $108.25/mo. for 12 mo. or $1299**' mac='MacBook Air 15"' slogan='Impressively big. Impossibly thin.' img='https://prod-api.mediaexpert.pl/api/images/gallery/thumbnails/images/55/5565020/Laptop-APPLE-MacBook-Air-2023-15.3-Retina-M2-ksiezycowa-poswiata-02.jpg'/>
        <MacViewBanner price='From $166.58/mo. for 12 mo. or $1999**' mac='Mac Studio' slogan='Supercharged by M2 Max and M2 Ultra.' img='https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mac-studio-select-202306?wid=452&hei=420&fmt=jpeg&qlt=95&.v=1684345161143'/>
        <MacViewBanner price='From $583.25/mo. for 12 mo. or $6999**' mac='Mac Pro' slogan='Transformed by Apple silicon.' img='https://images.macrumors.com/t/n8gj2XjozFmCVLA7rT_xn23q1y4=/800x0/article-new/2022/03/mac-pro-tower-close-up.jpeg?lossy'/>
        <MacPanel />
        <Footer mobile={mobile} />
        </div>
    )
}

ExploreAllMac.propTypes={
    mobile: PropTypes.object
}

export default ExploreAllMac