import { useState } from "react";
import useApi from "../../hooks/useApi";
import { connect } from "react-redux";
import actionTypes from "../../redux/actions/actionTypes";
function Login(props) {
    const api = useApi()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const handleLogin = () => {
        const postData = {email,password}
        console.log(">>POST DATA", postData)
        api.post("/auth/login", postData)
        .then(res =>{
            props.dispatch({
                type: actionTypes.set_token,
                payload:{
                    token: res.data.data.token,
                }
            })
        })
        .catch(err=>{
            alert ("bir hata oluştu lütfen tekrar deneyin")
        })
    }
    return (
        <div className="row d-flex justify-content-center">
            <div className="col-md-3 col-sm-12">
                <h3>Buradan giriş yapın!</h3>
                <hr />
                <hr />
                <form noValidate>
                    <div className="row g-3">
                        <div className="col-sm-12 mb-3">
                            <label>E-mail</label>
                            <input
                                onChange={event => setEmail(event.target.value)}
                                type="email"
                                class="form-control"
                                placeholder="E-mail"
                                defaultValue="" />
                        </div>
                        <div className="col-sm-12 mb-3">
                            <label>Password</label>
                            <input
                                onChange={event => setPassword(event.target.value)}
                                type="password"
                                className="form-control"
                                placeholder="Password"
                                defaultValue="" />
                        </div>
                        <div className="d-grid">
                            <button onClick={handleLogin} type="button" className="btn btn-primary">Giriş Yap</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>

    )
}

const mapStateToProps=(state)=>{
    return {
      ...state
    }
  }
  
export default connect(mapStateToProps)(Login)
