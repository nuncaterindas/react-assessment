import  { useState } from 'react';

import FormInput from "../common/FormInput";
import signupInputData from "../../data/signupInputData";

 const FormSection = () => {

    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        email:'',
        password:''
      });

      const [error, setErrors] = useState({});
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));

        if(!formData[name]){
            setErrors((prevData) => ({ ...prevData, [name]: '' }));
        }

      };


  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    signupInputData.forEach((input) => {
        
        if (!formData[input.name]) {
            newErrors[input.name] = `${input.label} cannot be empty`;
          } else if (input.name === 'email' && !/^\S+@\S+\.\S+$/.test(formData[input.name])) {
            newErrors.email = input.errorMessage;
          } else if (input.name === 'password' && !/^.{6,}$/.test(formData[input.name])) {
            newErrors.password = input.errorMessage;
          }else if (input.pattern && !new RegExp(input.pattern).test(formData[input.name])) {
            newErrors[input.name] = input.errorMessage;
          }
    });


    setErrors(newErrors);
  };
  
    return (
        <div className="flex-col gap-5 flex items-center justify-center md:m-5 p-6">
          <button
                type="submit"
                className="w-4/5 md:w-full bg-accent-blue hover:bg-dark-blue text-white  drop-shadow-lg font-bold py-2 px-16 rounded focus:outline-none focus:ring h-20 lg:h-auto"
              >
               <span className='text-xs font-bold text-start'>Try it free 7 days </span>< span className='text-xs text-start font-light text-gray-300'>then $20/mo. thereafter</span>
          </button>
          <div className="w-4/5 bg-white p-6 rounded drop-custom-shadow md:w-full pt-8  mx-10">
            <form onSubmit={handleSubmit}>
            {
                signupInputData.map((input,index)=>(
                    <div className="mb-4"  key={index}>
                        <FormInput
                            error={error[input.name]}
                            value={formData[input.name]}
                            onChange={handleChange}
                            placeholder={input.placeholder}
                            {...input}
                    />
                    </div>
                ))
            }
             
              <button
                type="submit"
                className="w-full bg-primary-green hover:bg-light-green text-xs text-white uppercase font-bold py-3 px-5 rounded focus:outline-none focus:ring"
              >
                Claim your free trial
              </button>
              <div className="text-center text-2xs text-grayish-blue m-4">
                <span>By clicking the button, you are agreeing to our </span>
              <span className="text-primary-red font-extrabold">Terms and Services</span></div>
            </form>
          </div>
        </div>
    );
  };

  export default FormSection;
