import { connect } from "react-redux";

function Header(props) {
    return(
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
        <h5 className="my-0 mr-md-auto font-weight-normal">Company name</h5>
        <nav className="my-2 my-md-0 mr-md-3">
          <a className="p-2 text-dark text-decoration-none" href="#/">Mainpage</a>
          <a className="p-2 text-dark text-decoration-none" href="#/categories">Categories</a>
          {props.appDataState.user ? (
             <a className="p-2 btn btn-primary text-decoration-none" href="#/">
              {props.appDataState.user.fullname}
             </a>
          ):(
            <a className="p-2 text-dark text-decoration-none" href="#/login">Login</a>
          )}
        </nav>
        <a className="btn btn-outline-primary" href="#/">Sign up</a>
      </div>

    )
}
const mapStateToProps=(state)=>{
  return{
    ...state
  }
}



export default connect(mapStateToProps)(Header);