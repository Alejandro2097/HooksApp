import { Link, NavLink } from "react-router-dom"

export const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">useContext</Link>
          
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav">
                    <NavLink
                        className={(args) => {
                            console.log(args);
                            return 'nav-link'
                        }} 
                        to="/">
                        Home
                    </NavLink>
                    <NavLink
                        className={(args) => {
                            console.log(args);
                            return 'nav-link'
                        }} 
                        to="/about">
                        About
                    </NavLink>
                </ul>
    
            </div>
        </div>
    </nav>
  )
}
