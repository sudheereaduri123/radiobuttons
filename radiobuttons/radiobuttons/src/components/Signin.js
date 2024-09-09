import React, { useRef } from 'react'

function Signin() {
    let selectStateRef=useRef();
    let msgLabelRef=useRef();
    let firstNameRef=useRef();
    let lastNameRef=useRef();
    let maleRBRef=useRef();
    let femaleRBRef=useRef();

    let selectedGender;
    let salutation ;
    let maritalStatus;


    let onClickAccount= ()=>{
      if(selectedGender == "male"){
        salutation = "mr."
      }else{
        if(maritalStatus == "single"){
          salutation = "miss."
        }else{
          salutation = "Mrs."
        }
       
      }
        
    msgLabelRef.current.innerHTML = `${salutation}.${firstNameRef.current.value} ${lastNameRef.current.value} from ${ selectStateRef.current.value},your account has been created sucessfully`
    }
    
   
  return (
    <div>
        <h2>Signup Form</h2>

<form>
        <div>
        <label>firstName</label>
        <input ref={firstNameRef}></input>
        </div>
        <div>
        <label>lastName</label>
        <input ref={lastNameRef}></input>
        <div>
          <div>
            <label>Gender</label>
            <input type='radio' name='gender' ref={maleRBRef} onchange={()=>{
              if(maleRBRef.current.checked == true){
                selectedGender ="male";
              }

            }}></input>
            <label className='innerLabel'>male</label>
            <input type='radio' name='gender' ref={femaleRBRef} onchange={()=>{
              if(femaleRBRef.current.checked == true){
                selectedGender ="female";

              }
            }}></input>
            <label className='innerLabel'>female</label>
          </div>
          <div>
            <label>marital status</label>
            <input type='radio' name='ms' onchange={(eventobj)=>{
              console.log(eventobj);
              if(eventobj.target.checked == true){
                maritalStatus = "single"
              }
            }}></input>
            <label className='innerLabel'>single</label>
            <input type='radio' name='ms' onChange={(e)=>{
              console.log(e);
              if(eventobj.target.checked == true){
                maritalStatus = "married"
              }
            }}></input>
            <label className='innerLabel'>married</label>
          </div>
      
            <label>state</label>
            <select ref={selectStateRef}>
            <option>select state</option>
            <option>Andra pradesh</option>
            <option>Telangana</option>
            <option>karnataka</option>
            <option>kerla</option>
            <option>Tamilnadu</option>

            </select>

        </div>
        </div>
        <div>
        <label>Email</label>
        <input></input>
        </div>
        <div>
        <label>password</label>
        <input></input>
        </div>
        <div>
        <label>mobileNo</label>
        <input></input>
        </div>
        <div>
            <button onClick={()=>{
              onClickAccount();
            }} >submit</button>
        </div>
        <label ref={msgLabelRef} style={{width:"500px"}}></label>
        
      </form>
      
    </div>
  )
}
export default Signin
