import { useEffect, useState } from "react";
import useApi from "../../hooks/useApi";
import ItemBox from "../../components/item_box";

function Home() {
  const [categoryBoxes, setCategoryBoxes] = useState([])
  const api = useApi()
  useEffect(() => {
    api.get('public/categories/listMainCategories')
      .then(response => {
        const tempCategoryBoxes = []
        response.data.data.map((item, index) => {
          //console.log(">> ITEM", index, item)
          tempCategoryBoxes.push(<ItemBox key={index} id={item.id} name={item.name} image={item.image} slug={item.slug} />)
        })
        setCategoryBoxes(tempCategoryBoxes)
      })
  }, [])
  return (
    <div className="container">
      <div className="card-deck mb-3 text-center">
        <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 className="display-4">Hizmet Bulma Projesi</h1>
          <p className="lead">Aşağıdaki kategorilere tıklayabilirsiniz</p>
        </div>
        <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {categoryBoxes}
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Free</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$0 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>10 users included</li>
              <li>2 GB of storage</li>
              <li>Email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-outline-primary">Sign up for free</button>
          </div>
        </div>
        <div className="card mb-4 box-shadow">
          <div className="card-header">
            <h4 className="my-0 font-weight-normal">Pro</h4>
          </div>
          <div className="card-body">
            <h1 className="card-title pricing-card-title">$15 <small className="text-muted">/ mo</small></h1>
            <ul className="list-unstyled mt-3 mb-4">
              <li>20 users included</li>
              <li>10 GB of storage</li>
              <li>Priority email support</li>
              <li>Help center access</li>
            </ul>
            <button type="button" className="btn btn-lg btn-block btn-primary">Get started</button>
          </div>
        </div>

       
      </div>
    </div>
  )
}
export default Home;