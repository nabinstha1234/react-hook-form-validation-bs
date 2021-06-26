import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useForm  } from "react-hook-form";
import classnames from "classnames";

function App() {
  const {register, handleSubmit,formState:{errors}} = useForm({
    mode:"onBlur"
  });
  console.log(errors)
  const onSubmit=(data)=>{
    console.log(data)
  }
  return (
      <div className="container py-5">
        <div className="card border-0 shadow w-100 mx-auto py-5 px-5">
        <form action="" onSubmit={handleSubmit(onSubmit)}>
        <div className="form-group">
          <label htmlFor="fullname">Full Name</label>
          <input
            type="text"
            className={classnames('form-control',{'is-invalid':errors.fullname})}
            id="fullname"
            placeholder="Enter Your Full Name"
            {...register('fullname',{
              required:"This field is required",
              minLength:{
                value:4,
                message:"Please Enter minimum 5 character."
              }
            })}
          />
         {errors.fullname
          && <small className="form-text text-danger">{errors.fullname?.message}</small> 
           }
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail Address</label>
          <input
            type="text"
            className={classnames('form-control',{'is-invalid':errors.email})}
            id="email"
            placeholder="Enter Your E-mail Address"
            {...register('email',{
              required:"This field is required",
              pattern:{
                value:/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
              message:'Please enter a valid email address.'
              }
            })}
          />
            {errors.email
                && <small className="form-text text-danger">{errors.email?.message}</small> 
           }
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone Number</label>
          <input
            type="text"
            className={classnames('form-control',{'is-invalid':errors.phone})}
            id="phone"
            placeholder="Enter Your Phone Number"
            {...register('phone',{
              required:"Phonenumber is required",
              pattern:{
                value:/^\d{10}$/,
                message:"Please enter valid phone number"
              }
            })}
          />
           {errors.phone
                && <small className="form-text text-danger">{errors.phone.message}</small> 
           }
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="text"
            className={classnames('form-control',{'is-invalid':errors.password})}
            id="password"
            placeholder="Enter Your Password"
            {...register('password',{
              required:"This field is required",
            pattern:{
              value:/(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/,
              message:" Password (UpperCase, LowerCase, Number/SpecialChar and min 8 Chars)"
            }})}
          />
            {errors.password
                && <small className="form-text text-danger">{errors.password.message}</small> 
           }
        </div>
        <div className="form-group">
          <label htmlFor="state">Choose Your State</label>
          <select className={classnames('form-control',{'is-invalid':errors.state})} 
            id="state" {...register('state',{
            required:"This fie;d is required"
          })}>
            <option value="">--- Select Your State ---</option>
            <option value="Jharkhand">Jharkhand</option>
            <option value="Assam">Assam</option>
            <option value="Meghalaya">Meghalaya</option>
            <option value="Punjab">Punjab</option>
          </select>
          {/* <small className="form-text text-danger">{errors.state.message}</small> */}
          {errors.state
                && <small className="form-text text-danger">{errors.state.message}</small> 
           }
        </div>
        <div className="form-group">
          <label htmlFor="gender" className="mr-4">Choose Your Gender</label>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="male"
              value="male"
              {...register('gender',{required:"This field is required"})}
            />
            <label className="form-check-label" htmlFor="male">male</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="female"
              value="female"
              {...register('gender',{
                required:"This field is required"
              })}
            />
            <label className="form-check-label" htmlFor="female">female</label>
          </div>
          <div className="form-check form-check-inline">
            <input
              className="form-check-input"
              type="radio"
              id="other"
              value="other"
              {...register('gender',{
                required:"This field is required"
              })}
            />
            <label className="form-check-label" htmlFor="other">other</label>
          </div>
          {/* <small className="form-text text-danger">{errors.gender.message}</small> */}
          {errors.gender
                && <small className="form-text text-danger">{errors.gender.message}</small> 
           }
        </div>
        <div className="form-group">
          <div className="form-check form-check-inline">
            <input className="form-check-input" type="checkbox" id="tnc" {...register('tnc',{
              required:"This field is required"
            })} />
            <label className="form-check-label" htmlFor="tnc"
              >I agree all terms & conditions</label
            >
          </div>
          {/* <small className="form-text text-danger">{errors.tnc.message}</small> */}
        </div>
        <button type='submit' className="btn btn-primary">Create New Account</button>
      </form>
           
        </div>
      </div>
  );
}

export default App;
