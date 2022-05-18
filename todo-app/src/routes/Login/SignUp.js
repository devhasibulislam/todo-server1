import React from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';

const SignUp = () => {
    const [user] = useAuthState(auth);
    const [
        createUserWithEmailAndPassword,
        userEP,
        loadingEP,
        errorEP,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const [
        signInWithGoogle,
        userG,
        loadingG,
        errorG
    ] = useSignInWithGoogle(auth);

    const [
        updateProfile,
        updating,
        errorUP
    ] = useUpdateProfile(auth);

    const navigate = useNavigate();

    const handleSignup = async (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        await updateProfile({ displayName: name });

        toast('registration success!');
    };

    if (userEP || userG || user) {
        navigate('/home');
    }

    return (
        <section>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Sign up now!</h1>
                        <>
                            {(loadingEP || updating || loadingG) && <Loading />}
                            {(errorEP || errorUP || errorG) && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                <span className="font-medium">Error alert!</span> {errorEP?.message || errorUP?.message || errorG?.message}.
                            </div>}
                        </>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleSignup}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Name</span>
                                    </label>
                                    <input required name='name' type="text" placeholder="name" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input required name='password' type="password" placeholder="password" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Register" className='btn btn-primary' />
                                    <label className="label">
                                        <Link to="/login" className="label-text-alt link link-hover">Already have an account?</Link>
                                    </label>
                                </div>
                            </form>
                            <hr className='my-4' />
                            <p className="form-check-label text-gray-800 text-center">
                                or, you can try
                                <button className="btn btn-lg btn-primary bg-red-600 hover:bg-red-700  w-full py-2 text-white rounded mt-2"
                                    type="submit" onClick={() => signInWithGoogle()}><i className="fa fa-google mr-2" aria-hidden="true"></i> Sign up with google</button>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SignUp;