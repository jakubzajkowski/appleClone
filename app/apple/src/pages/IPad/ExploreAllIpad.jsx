import  PropTypes  from 'prop-types'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import IpadViewBanner from './Usable/IpadViewBanner'
import IPadPanel from './Usable/IPadPanels'

const ExploreAllIpad=({mobile})=>{
    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
        <Nav mobile={mobile}/>
        <IpadViewBanner color='rgb(20,20,20)' price='' ipad='Final Cut Proand Logic Pro for iPad"' slogan='Learn more about Final Cut Pro for iPad' img='https://static.android.com.pl/uploads/2023/05/interface_gallery_hdr_workflow__e83n93xai4ia_large.jpg'/>
        <IpadViewBanner color='black' price='From $799' ipad='iPad Pro' slogan='Supercharged by M2' img='https://www.apple.com/v/ipad-pro/am/images/overview/hero/hero_startframe__gck1t26hu3am_large.jpg'/>
        <IpadViewBanner color='white' price='From $449' ipad='iPad' slogan='Lovable. Drawable. Magical.' img='https://www.apple.com/v/ipad-10.9/b/images/overview/hero/hero__ecv967jz1y82_large.jpg'/>
        <IPadPanel />
        <Footer mobile={mobile} />
        </div>
    )
}

ExploreAllIpad.propTypes={
    mobile: PropTypes.object
}

export default ExploreAllIpad