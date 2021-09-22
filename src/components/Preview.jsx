import {useSelector} from "react-redux";
import "./css/preview.css"
let Preview = ()=>{
    
    let {fname,lname,phoneNo,email,city,state,cgpa,degree,year} = useSelector((state )=> state.details);
    let templateCode = useSelector((state)=>state.template);
    return (
        <>
        <div className="preview-container">

            <div className={`template-${templateCode}`}>{fname}</div>
            <div className={`template-${templateCode}`}>{lname}</div>
            <div className={`template-${templateCode}`}>{phoneNo}</div>
            <div className={`template-${templateCode}`}>{email}</div>
            <div className={`template-${templateCode}`}>{city}</div>
            <div className={`template-${templateCode}`}>{state}</div>
            <div className={`template-${templateCode}`}>{cgpa}</div>
            <div className={`template-${templateCode}`}>{degree}</div>
            <div className={`template-${templateCode}`}>{year}</div>
        </div>
        </>
    );
}
export default Preview;