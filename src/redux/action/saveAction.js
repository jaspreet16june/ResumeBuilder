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

// export const saveResume = (uid, details,code)=>{
//     return (dispatch) => {
//         dispatch(saveResumeCreator());
//         firestore
//         .collection("resume")
//         .add({
//             uid, 
//             details, 
//             code,
//         }).then((docRef)=>{
//             return docRef.get();
//         }).then((doc)=>{
//             dispatch(completeSaveResume(doc.id));
//         }).catch((err)=>{
//             dispatch(errSaveCreator(err));
//         })
//     }
// }

export const saveResume = (uid, details, code) => {
    return (dispatch) => {
      dispatch(saveResumeCreator());
  
      firestore
        .collection("resume")
        .add({
          uid,
          details,
          code,
        })
        .then((docRef) => {
          return docRef.get();
        })
        .then((doc) => {
          dispatch(completeSaveResume(doc.id));
        })
        .catch((err) => {
          dispatch(errSaveCreator(err));
        });
    };
  };