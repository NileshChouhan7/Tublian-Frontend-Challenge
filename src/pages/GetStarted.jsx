import loginImg from '../assets/img/get-started-img.svg'
import logoImg from '../assets/img/logo.svg'
import Navbar from '../comman/Navbar';
const GetStarted = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-6">
                    <div className="left-side">
                        <img src={loginImg} className="img-fluid" alt="..." />
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="right-side mt-5">
                        {/* <Navbar/> */}
                         <nav class="navbar navbar-expand-lg navbar-light">
        <div class="container-fluid ">
            <a class="navbar-brand" href="#"><img src={logoImg} alt="" /></a>
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link active" aria-current="page" href="#">1: Get Started</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">2: Create Account</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">3: Account Setup</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="#">4: Payment</a>
                </li>

            </ul>
        </div>
    </nav>
                        <div className="login-form m-2">
                            <div className="main-heading">
                                <h3>Get Started</h3>
                                <span>Start recruiting streetcred developers, Today!!</span>
                            </div>
                            <form action="#">
                                <div className="mt-4 mb-4">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                                </div>
                                <div className="mt-4 mb-5">
                                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                                </div>
                                <button type="submit" className="btn btn-primary mt-4 mb-4">Process</button>
                            </form>
                            <span>Already have an account?<a href="#">Log in</a></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;