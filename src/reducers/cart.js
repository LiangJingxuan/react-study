// 数据初始
const initState = [
    {
        id: 1,
        name: 'aaa',
        price: 80.5,
        num: 2
    },
    {
        id: 2,
        name: 'bbb',
        price: 10.5,
        num: 3
    },
];

export default (state=initState, action)=>{
    switch(action.type){
        default:
            return state;
    }
}