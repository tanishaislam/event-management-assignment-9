import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Components/providers/AuthProviders";


const Register = () => {
    const {createUser}= useContext(AuthContext);
    const [passwordError, setPasswordError]= useState('');
    const handleRegister =(e)=>{
        e. preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log( name, email, password)
        if (!/^(?=.*[a-z])(?=.*[@$!%*#?&])[a-z\d@$!%*#?&]{6,}$/.test(password)) {
          return  setPasswordError('please write a valid password')
            
        }
        createUser(email, password)
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
        })
    }
    return (
        <div>
            <div>
            <div className="hero lg:h-[95vh]" style={{backgroundImage: 'url(https://i.ibb.co/gg3vK7P/abstract-soft-pink-background-modern-and-clean-banner-landing-page-concept-with-pastel-color-free-ve.jpg)'}}>
            <div className="hero-overlay bg-pink-400 bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-black font-norican pb-5">Please <span className="text-pink-500">Register </span><span className="text-blue-600">now</span> !!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-2xl shadow-2xl bg-base-100">
                <form onSubmit={handleRegister} className="card-body">
                <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Name</span>
                    </label>
                    <input type="text" name="name" placeholder="Name" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Email</span>
                    </label>
                    <input type="email" name="email" placeholder="email" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Password</span>
                    </label>
                    <input type="password" name="password" placeholder="password" className="input input-bordered text-black" required />
                    {
                        passwordError? <p className="text-red-500 text-start">{passwordError}</p>: ''
                    }
                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>                    
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white border-none">Register</button>
                    <p className="text-center text-black py-6">Already have an account ?<Link to="/login" className="text-blue-700 font-bold"> Please login</Link></p>
                    </div>
                </form>
               
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
        </div>
    );
};

export default Register;