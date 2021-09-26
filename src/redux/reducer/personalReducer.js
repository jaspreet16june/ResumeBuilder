let initialState ={
    fname:"",
    lname:"",
    phoneNo:"",
    State:"",
    city:"",
    email:"",
    cgpa:"",
    Degree:"",
    Institute:"",
    Year:"",
    isPublic:false,

}
let detailReducer =(state = initialState, action)=>{
    switch(action.type){
        case "SET_DETAILS":
            return {...state,...action.payload};
        default :
            return state;
    }

}

export default detailReducer;