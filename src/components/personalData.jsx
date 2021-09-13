import Preview from "./Preview";
import "./css/preview.css";
import "./css/personal.css";
import { useSelector } from "react-redux";
import { detailsCreator } from "../redux/action/personalAction";
import { useDispatch } from "react-redux";
let Personal = () => {
   let details =  useSelector((state)=> state.details);
   let dispatch = useDispatch()
   let {fname,lname,phoneNo,email,city,State} = details;
  return (
    <>
      <div className="personal-container">
        <div className="personal-form">
          <h3 className= "text-primary">Personal Details</h3>
          <form className="row g-3 needs-validation" Validate >
            <div className="col-md-4">
              <label for="validationCustom01" className="form-label">
                First name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                onChange={(e)=>{
                  dispatch(detailsCreator({fname : e.currentTarget.value}));
                }}
                value ={fname}
                placeholder="First Name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Last name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value ={lname}
                onChange={(e)=>{
                    dispatch(detailsCreator({lname: e.currentTarget.value}));
                }}
                placeholder="Last name"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">
                Email 
              </label>
              <div className="input-group has-validation">
                <span className="input-group-text" id="inputGroupPrepend">
                  @
                </span>
                <input
                  type="email"
                  className="form-control"
                  id="validationCustomUsername"
                  value ={email}
                  onChange={(e)=>{
                    dispatch(detailsCreator({email: e.currentTarget.value}));
                }}
                  placeholder="Email"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div className="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom03" className="form-label">
                City
              </label>
              <input
                type="text"
                placeholder="City"
                value ={city}
                onChange={(e)=>{
                    console.log(e);
                    dispatch(detailsCreator({city: e.currentTarget.value}));
                }}    
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom03" className="form-label">
                State
              </label>
              <input
                type="text"
                placeholder="State"
                value ={State}
                onChange={(e)=>{
                    console.log(e);
                    dispatch(detailsCreator({State: e.currentTarget.value}));
                }}    
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">Please provide a valid State.</div>
            </div>
              
            <div className="col-md-3">
              <label for="validationCustom05" className="form-label">
                Phone No.
              </label>
              <input
                type="text"
                className="form-control"
                value ={phoneNo}
                onChange={(e)=>{
                    dispatch(detailsCreator({phoneNo:e.currentTarget.value}));
                }}
                placeholder="Phone No."
                id="validationCustom05"
                required
              />
            </div>
            <div className="col-12">
              <button className="btn btn-primary next-btn" type="submit">
                NEXT
              </button>
            </div>
          </form>
        </div>
        <Preview />
      </div>
    </>
  );
};
export default Personal;
