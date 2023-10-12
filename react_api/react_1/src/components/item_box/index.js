function ItemBox(props) {
    console.log(">>PROPS",props)
    return(
        <div className="card mb-4 box-shadow">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal">{props.name}</h4>
        </div>
        <div className="card-body">
          <img alt="" src={props.image} style={{width: "90%", alignItems: "center", margin:"10px 0px 10px 0px"}}/>
          <a href={`#/category/` + props.slug} className="btn btn-lg btn-block btn-primary">Open Category</a>
        </div>
      </div>
    )
}
export default ItemBox;