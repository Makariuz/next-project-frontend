import { Link, useNavigate } from 'react-router-dom';
import './LandingPage.scss';


export function LandingPage() {

    let navigate = useNavigate();



    return (
        <div className='container'>
            <div className='top-wrapper'>
            <h1>Next Step</h1>
            </div>
            <div className='middle-wrapper'>

            <button onClick={() => navigate('/login')} className='btn-login btn-blue'>
                Login
            </button>
            <Link to="/create-user" className='link-signup'>No account? Sign up!</Link>


            </div>
            <div className='bottom-wrapper'>
                <article>
Your future in one place, take the <span>  Next Step. </span></article>
            </div>
 

        </div>
           
            

    )
}