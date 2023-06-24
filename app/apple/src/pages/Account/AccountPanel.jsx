import  PropTypes  from 'prop-types'


const AccountPanel=({mobile})=>{
    return (
        <div style={{width:mobile.matches ? '100vw' : '99vw',overflow:'hidden',backgroundColor:'rgb(245,245,245)'}}>
                
        </div>
    )
}

AccountPanel.propTypes={
    mobile: PropTypes.object
}

export default AccountPanel