import actionType from './actionType'

export const jia = (id)=>{
    console.log(id)
    return {
        type: actionType.CART_NUM_JIA,
        payload: {
            id
        }
    }
}

export const jian = (id)=>{
    console.log(id)
    return {
        type: actionType.CART_NUM_JIAN,
        payload: {
            id
        }
    }
}