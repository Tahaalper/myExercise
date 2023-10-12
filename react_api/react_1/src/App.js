import Footer from "./components/footer/footer";
import Header from "./components/header";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";
import Category from "./pages/category";
import { connect } from "react-redux";
import useApi from "./hooks/useApi";
import actionTypes from "./redux/actions/actionTypes";

function App(props) {
  const api = useApi

if (props.authState.token && (!props.appDataState.user)){
  api.get("user/appData")
  .then(res=>{
    props.dispatch({
      type: actionTypes.set_app_data,
      payload:{
        user: res.data.data.user
      }
    })
  })
  .catch(err=>{
    console.log("bir hata oluştu")
  })
}

  return (
    <div className="container py-3">
      <Header />
      <HashRouter>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="login" element={<Login />}></Route>
          <Route path="category/:slug" element={<Category />}></Route>
        </Routes>
      </HashRouter>
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    ...state
  }
}

export default connect(mapStateToProps)(App)
