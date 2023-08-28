const initialState=0

const changeBalance = (state = initialState, action) =>{
    console.log(action.payload);
    switch (action.type) {
        case "DEPOSIT":
            return state + action.payload
        case "WITHDRAW":
            return state -action.payload
    
        default: return state
    }
}
export default changeBalance