const testData={birthday: "2000-12-12",country:"Poland",email: "jan@gmail.com",first_name: "jan",last_name: "kowalski",phone_number: "123123122",}

// export const FetchUser=(data,isLoading)=>{
//     if (data?.user){
//         return {
//             type:'FETCH_USER',
//             payload:[data?.user,true,isLoading]
//         }
//     }
//     else{
//         return {
//             type:'FETCH_USER',
//             payload:[data?.user,false,false]
//         }
//     }
// }
export const FetchUser=(data,isLoading)=>{
    if (data?.user){
        return {
            type:'FETCH_USER',
            payload:[testData,true,false]
        }
    }
    else{
        return {
            type:'FETCH_USER',
            payload:[testData,true,false]
        }
    }
}
export const FetchCart=(cart)=>{
    if (cart){
        return {
            type:'FETCH_CART',
            payload:cart
        }
    }
    else{
        return {
            type:'FETCH_CART',
            payload:null
        }
    }
}
export const DeleteCart=(cart)=>{
        return {
            type:'DELETE_CART',
            payload:cart
        }
    
}
export const AddCart=(cart)=>{
    return {
        type:'ADD_CART',
        payload:cart
    }

}