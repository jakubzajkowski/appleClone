export const variants={
    open:{
        visibility: 'visible',
        y:["-100%","0%"]
    },
    close:{
        y:["0%","-100%"],
        onTransitionEnd:{
        visibility: 'hidden',
        }
    }
}