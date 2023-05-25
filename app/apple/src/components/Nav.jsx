import PropTypes from 'prop-types';
import DesktopNavigation from './DesktopNav';
import MobileNavigation from './MobileNav';
function Nav({mobile}) {
    return (
        mobile.matches ? (<MobileNavigation />) : (<DesktopNavigation />)
    )
}
Nav.propTypes={
    mobile: PropTypes.any
}

export default Nav