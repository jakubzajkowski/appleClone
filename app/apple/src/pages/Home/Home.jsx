import Navigation from "../../components/Nav"

const Home=()=>{
    return <div style={{width:'99vw'}}>
        <Navigation/>
        <div className="w-100 position-relative iphone-14-pro__section" style={{backgroundColor:'black'}}>
            <h1 className="text-center p-3 text-light" style={{fontSize:'3rem',fontWeight:'bold'}}>Phone 14 Pro</h1>
            <h4 className="text-center text-light" style={{fontSize:'2rem'}}>Pro. Beyond.</h4>
            <ul className="text-center text-primary">
                <li className="d-inline mx-2 " style={{cursor:'pointer'}}>Learn More</li>
                <li className="d-inline mx-5 " style={{cursor:'pointer'}}>Buy</li>
            </ul>
            <video className="w-50 rounded mx-auto d-block" src="https://www.apple.com/105/media/us/iphone-14-pro/2023/b094f6e4-dcdb-494f-bd72-45d659126dcd/anim/hero/large.mp4" autoPlay muted loop></video>
            {/* <img src="https://v.wpimg.pl/OGJiMGM0YCYrCzt0YkttM2hTby4kEmNlP0t3ZWIId3EyXXR_YlYmKy8bKDciHig1PxksMD0ePytlCD0uYkZ-aC4APjchUTZoLwQvIikfeSMpW34ldQliJH4KKGp5Ant1Zwsud30dfHQsUHUlLwAsc30Lbzo" alt="" /> */}
        </div>
        <div className="w-100 position-relative iphone-14__section" style={{backgroundColor:'white'}}>
            <h1 className="text-center mt-5 p-4 text-dark" style={{fontSize:'3rem',fontWeight:'bold'}}>iPhone 14</h1>
            <h4 className="text-center text-dark" style={{fontSize:'2rem'}}>Wonderfull</h4>
            <ul className="text-center text-primary">
                <li className="d-inline mx-2 " style={{cursor:'pointer'}}>Learn More</li>
                <li className="d-inline mx-5 " style={{cursor:'pointer'}}>Buy</li>
            </ul>
            <img className="w-50 rounded mx-auto d-block" src="https://v.wpimg.pl/OGJiMGM0YCYrCzt0YkttM2hTby4kEmNlP0t3ZWIId3EyXXR_YlYmKy8bKDciHig1PxksMD0ePytlCD0uYkZ-aC4APjchUTZoLwQvIikfeSMpW34ldQliJH4KKGp5Ant1Zwsud30dfHQsUHUlLwAsc30Lbzo" alt="" />
        </div>
    </div>
}

export default Home