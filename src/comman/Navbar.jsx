const Navbar = () =>{

    return(

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

    );
};
export default Navbar;