import Preview from "./Preview";
import "./css/form.css";

import { useSelector } from "react-redux";
import { detailsCreator } from "../redux/action/personalAction";
import { useDispatch } from "react-redux";
let Qualification = () => {
   let details =  useSelector((state)=> state.details);
   let dispatch = useDispatch()
   let {Institute,degree,year,cgpa,isPublic} = details;
  return (
    <>
      <div className="qualification-container">
        <div className="qualification-form">
          <h3 className= "text-primary">Qualification Details</h3>
          <form className="row g-3 needs-validation" Validate >
            <div className="col-md-4">
              {/* <label for="validationCustom01" className="form-label">
                College Name 
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom01"
                value ={college}
                onChange={(e)=>{
                    dispatch(detailsCreator({college : e.currentTarget.value}))
                }}
                placeholder="College Name"
                required
              /> */}
            <label for="validationCustom02" className="form-label">
                College Name
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value ={Institute}
                onChange={(e)=>{
                    dispatch(detailsCreator({Institute: e.currentTarget.value}));
                }}
                placeholder="College Name"
                required
              />


            </div>
            <div className="col-md-4">
              <label for="validationCustom02" className="form-label">
                Degree
              </label>
              <input
                type="text"
                className="form-control"
                id="validationCustom02"
                value ={degree}
                onChange={(e)=>{
                    dispatch(detailsCreator({degree: e.currentTarget.value}));
                }}
                placeholder="Degree"
                required
              />
              <div className="valid-feedback">Looks good!</div>
            </div>
            <div className="col-md-4">
              <label for="validationCustomUsername" className="form-label">
                CGPA
              </label>
              <div className="input-group has-validation">
               
                <input
                  type="email"
                  className="form-control"
                  id="validationCustomUsername"
                  value ={cgpa}
                  onChange={(e)=>{
                    dispatch(detailsCreator({cgpa: e.currentTarget.value}));
                }}
                  placeholder="cgpa"
                  aria-describedby="inputGroupPrepend"
                  required
                />
                <div className="invalid-feedback">Please choose a username.</div>
              </div>
            </div>
            <div className="col-md-6">
              <label for="validationCustom03" className="form-label">
                Year
              </label>
              <input
                type="text"
                placeholder="City"
                value ={year}
                onChange={(e)=>{
                    console.log(e);
                    dispatch(detailsCreator({year: e.currentTarget.value}));
                }}    
                className="form-control"
                id="validationCustom03"
                required
              />
              <div className="invalid-feedback">Please provide a valid city.</div>
            </div>
            <div class="form-check">
             <input 
             class="form-check-input" 
             type="checkbox" 
             id="flexCheckDefault" 
             onClick ={(e)=>{
               console.log(e.currentTarget.value)
                dispatch(detailsCreator({isPublic :e.currentTarget.value}));
             }}             
             
             />
             <label class="form-check-label" for="flexCheckDefault">
             Default checkbox
             </label>
             </div>
            <div className="col-12">
              <button className="btn btn-primary next-btn" type="submit">
                PREV
              </button>
            </div>
          </form>
        </div>
        <Preview />
      </div>
      {/* <div className="btn1 btn-primary">Save to dataBase</div> */}
      <div className="btn btn-primary save">Save to dataBase</div>
      <div className="btn btn-primary Generate" >Generate Link</div>

    </>
  );
};
export default Qualification;
