import {firestore} from "../../firebase";
 export const saveResumeCreator =()=>{

    return{
        type:"SAVE_RESUME"
    }
}
export const errSaveCreator =(err)=>{
    return{
        type:"ERR_RESUME",
        payload:err
    }
}
export const completeSaveResume=(id)=>{
    return{
        type:"COMPLETE_RESUME",
        payload:id,
    }
}