import { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Components/providers/AuthProviders";
import swal from 'sweetalert';

const Login = () => {
    const {signInUser, signInWithGoogle}= useContext(AuthContext);
    const locations = useLocation();
    const navigate = useNavigate();
    console.log(locations)
    const handleLogin =(e)=>{
        e. preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        console.log(email, password)
        signInUser(email, password)
        .then(result =>{
            console.log(result.user)
            navigate(locations?.state ? locations.state : '/')
        })
        .catch(error =>{
            console.error(error)
            swal(error.message)
        })
    }

    const handleGoogleSignIn = ()=>{
        signInWithGoogle()
        .then(result =>{
            console.log(result.user)
        })
        .catch(error =>{
            console.error(error)
            
        })
    }

    return (
        <div>
            <div className="hero lg:h-[90vh]" style={{backgroundImage: 'url(https://i.ibb.co/gg3vK7P/abstract-soft-pink-background-modern-and-clean-banner-landing-page-concept-with-pastel-color-free-ve.jpg)'}}>
            <div className="hero-overlay bg-pink-400 bg-opacity-30"></div>
            <div className="hero-content text-center text-neutral-content">
            <div className="">
            <div className="hero-content flex-col">
                <div className="text-center lg:text-left">
                <h1 className="lg:text-6xl md:text-5xl text-3xl font-bold text-black font-norican pb-5">Please <span className="text-pink-500">Login </span><span className="text-blue-600">now</span> !!!</h1>
                </div>
                <div className="card flex-shrink-0 w-full max-w-md shadow-2xl bg-base-100">
                <form onSubmit={handleLogin} className="card-body">
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Email</span>
                    </label>
                    <input type="email" placeholder="email" name="email" className="input input-bordered text-black" required />
                    </div>
                    <div className="form-control">
                    <label className="label">
                        <span className="label-text text-lg font-semibold">Password</span>
                    </label>
                    <input type="password" placeholder="password" name="password" className="input input-bordered text-black" required />

                    <label className="label">
                        <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                    </label>
                    </div>
                    <div className="form-control mt-6">
                    <button className="btn btn-primary bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white border-none">Login</button>
                    <p className="text-center text-black py-6">Do not have an account ?<Link to="/register" className="text-blue-700 font-bold"> Please Register</Link></p>
                    <p> <button onClick={handleGoogleSignIn} className="btn btn-primary bg-gradient-to-r from-pink-500 to-blue-500 hover:from-blue-500 hover:to-pink-500 text-white border-none">Sign In Google</button></p>
                    </div>
                </form>
                
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    );
};

export default Login;