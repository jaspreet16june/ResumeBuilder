let initialState ={
    loading:null,
    err:null,
    id:"",
}
let saveReducer =(state = initialState,action)=>{
        switch(action.type){
            case "SAVE_RESUME":
                return {...state,loading: true}

            case "ERR_RESUME" :
                return {...state,
                loading:false,
                err:action.payload,
            }
            case "COMPLETE_RESUME":
                return {
                    ...state,
                    loading:false,
                    id:action.payload,
                }
            default :
                return state;
        }
}