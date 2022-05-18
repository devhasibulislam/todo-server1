import React, { useEffect } from 'react';
import { useAuthState, useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../../shared/Loading';

const Reset = () => {
    const [user] = useAuthState(auth)
    const [
        sendPasswordResetEmail,
        sending,
        error
    ] = useSendPasswordResetEmail(
        auth
        );
    
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    useEffect(() => {
        if (user) {
            navigate(from, { replace: true });
        }
    }, [user, from, navigate]);

    const handleResetForm = async (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        console.log(email);
        await sendPasswordResetEmail(email);

        toast('reset info sent to email!');
        event.target.reset();
    };
    return (
        <section>
            <div className="hero min-h-screen" style={{ backgroundImage: "url(https://api.lorem.space/image/fashion?w=1000&h=800)" }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left text-white">
                        <h1 className="text-5xl font-bold">Sign in now!</h1>
                        <>
                            {sending && <Loading />}
                            {error && <div className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800" role="alert">
                                <span className="font-medium">Error alert!</span> {error?.message}.
                            </div>}
                        </>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <form onSubmit={handleResetForm}>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input required name='email' type="text" placeholder="email" className="input input-bordered" />
                                </div>
                                <div className="form-control mt-6">
                                    <input type="submit" value="Recover" className='btn btn-primary' />
                                    <label className="label">
                                        <Link to="/login" className="label-text-alt link link-hover">Go to login</Link>
                                    </label>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Reset;