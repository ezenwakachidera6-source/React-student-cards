

function Navbar() {
    return (
        <nav className="navbar">

            <div className="nav-container">

                <a href="#" className="logo">
                    <span className="logo-icon">S</span>
                    StudentHub
                </a>

                <div className="nav-links">
                    <a href="#" className="active-link">Home</a>
                    <a href="#students">Students</a>
                </div>

            </div>

        </nav>
    );
}

export default Navbar;
