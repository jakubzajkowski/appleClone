import {Parallax,ParallaxProvider} from 'react-scroll-parallax'
import PropTypes from 'prop-types'
import IMacPhoto from '../../img/Imac.png'
import { motion } from 'framer-motion'


const IMacParallax=({mobile})=>{
    return(
        <ParallaxProvider>
            <Parallax speed={0} scale={[1.1,0]}  translateY={['0%','100%']} style={{margin:'0rem 0 15rem 0'}}>
                <h2 className='mx-auto text-center my-5 display-1' style={{width:'8%',fontWeight:'bold'}}>Only 11.5 mm. Now that’s thin.</h2>
            </Parallax>
            <Parallax speed={-10} className='d-md-flex position-relative'>
                {mobile.matches ? '' : <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1,delay:1}} className='position-absolute' style={{top:'70%',left:'75%'}}>
                    <h3 className='w-100'>M1 integrates the processor, graphics, memory, and more onto a single chip. That let us put an entire computer into a space so small it practically disappears.</h3>
                </motion.div>}
                <img className={mobile.matches ?  'w-75 mx-auto d-block' :'w-50 mx-auto d-block'} style={{position:'relative',left:'-3%'}} src={IMacPhoto} alt="" />
                {mobile.matches ? '' :<motion.div className='position-absolute' initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1,delay:1}} style={{top:'35%',left:'0%'}}>
                    <img className='my-3' style={{width:'50px',height:'50px'}} src="https://i.erli.pl/2vhuu4.3cd2ad.l.webp" alt="" />
                    <h3 className='w-25'>This extraordinary design is only possible thanks to M1, the first system on a chip for Mac. It makes iMac so thin and compact that it fits in more places than ever.</h3>
                </motion.div>}
            </Parallax>
            <motion.h1 initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1,delay:0.5}} className='text-center display-3' style={{fontWeight:'bold',background: '-webkit-linear-gradient(left,orange,red,blue,purple)',WebkitBackgroundClip: 'text',WebkitTextFillColor: 'transparent'}}>Abracadabra</motion.h1>
            <Parallax rotateY={['0','200']} translateY={['0%','10%']} style={{margin:'0 0 5rem 0'}} speed={-20} className='position-relative'>
                <img style={{zIndex:'1'}} className={mobile.matches ? 'w-100':'w-75'} src="https://uep.edu.pl/wp-content/uploads/2021/04/1619047481_19_iMac-2021-ktory-model-wybrac.jpg" alt="" />
            </Parallax>
            {mobile.matches ? '' : <Parallax translateY={['0%','-500%']}>
                <motion.h3 className='w-25' style={{position:'relative',top:'-100%'}} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{duration:1,delay:0.2}}>A perfectly poised stand. And blazingly fast Thunderbolt ports.</motion.h3>
            </Parallax>}
            <img className="w-75 mx-auto d-block my-5" src="https://www.apple.com/hk/en/safari/images/overview/performance_4k_streaming__brrypnzyysya_large.jpg" alt="" />
        </ParallaxProvider>
    )
}



IMacParallax.propTypes={
    mobile:PropTypes.object
}

export default IMacParallax