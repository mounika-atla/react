const intialstate={
    store:['https://fakestoreapi.com/products/']
}
const productreducer=function((state=intialstate,action){
    if(action.type==="ADDPRODUCT")
    {
        {...state,store.action}
    }
    return state
})
export default productreducer