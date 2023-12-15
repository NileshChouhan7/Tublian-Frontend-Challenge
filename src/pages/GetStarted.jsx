import loginImg from '../assets/img/get-started-img.svg'
import logoImg from '../assets/img/logo.svg'
const GetStarted = () => {

    return (
        <div className="container-fluid">
            <div className="row">
                <div class="col-md-6">
                    <div className="left-side">
                        <img src={loginImg} class="img-fluid" alt="..." />
                    </div>
                </div>
                <div class="col-md-6">
                    <div className="right-side">
                        <nav class="navbar navbar-expand-lg navbar-light">
                            <div class="container-fluid">
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
                    </div>

                    <div className="login-form">
                        <div className="main-heading">
                            <h3>Get Started</h3>
                            <span>Start recruiting streetcred developers, Today!!</span>
                        </div>
                        <form action="#">
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="First Name" />
                            </div>
                            <div class="mb-3">
                                <input type="text" class="form-control" id="exampleFormControlInput1" placeholder="Last Name" />
                            </div>
                            <button type="submit" class="btn btn-primary">Process</button>
                        </form>
                        <span>Already have an account?<a href="#">Log in</a></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;