import { Link } from 'react-router-dom';

export default function NavBar() {
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">BadBank</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link className="nav-item nav-link active" to="/Home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link active" to="/CreateAccount">Create Account</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link active" to="/Login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link active" to="/Deposit">Deposit</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link active" to="/Withdraw">Withdraw</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-item nav-link active" to="/Alldata">DATA</Link>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
};