import React,{useState} from 'react'
import '../assets/Styles/landingpage.css'
import { useNavigate } from 'react-router-dom'

const LandingPage = () => {
      const [form, setForm] = useState({mail:"",pswd:""})
      let navigate=useNavigate()
      let handleInput=(e)=>{
          let keyName=e.target.name
          let keyValue=e.target.value
          // console.log(keyName,keyValue)
// todo: here were collecting the previous value frin the input field & update new property (key & value pair ) for the obect
          // setForm(preVal=>(
          //   {...preVal,[keyName]:keyValue}))

//todo: here directly access  the value from the form (initial value of usestate) & update new property (key & value pair  ) for the object
          setForm({...form ,[keyName]:keyValue})

      }
      let handlesubmit=(e)=>{
        e.preventDefault()
        let {mail,pswd}=form
        let credentials={
          email:"Admin@gmail.com",
          password:"admin@12345"
        }
        let {email ,password} =credentials;
        if(mail===email && pswd===password){
          // alert("welcome")
          navigate(`/AdminPortal`)
        }
        else{
          let errstyle=`solid 2px red`
          e.target[0].style.border=errstyle
           e.target[1].style.border=errstyle
          // alert("invalid credentials")
        }
        console.log(form)
      }
      return(
    <>
     <div className="landingpage">
         <div className="bgimage">
          <div className="container">
            <div className="left">
              <h1>welcom to online shopping application</h1>
              <div className="formbox">
                <form onSubmit={handlesubmit}> 
                  
                  <input 
                  type="email" 
                  placeholder='enter email' 
                  value={form.mail}
                  name='mail'
                  onChange={handleInput}
                  />
                  <input 
                  onChange={handleInput}
                  type="password"
                   placeholder='password' 
                   value={form.pswd}
                   name='pswd'
                  />
                  <button>
                    Login
                  </button>

                </form>
              </div>
            </div>
           
          </div>
         </div>
     </div>
    </>
      )
}

export default LandingPage

