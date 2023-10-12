import { useParams } from "react-router-dom";
function Category(){
    const params = useParams()
    return(
        <div>
            Burası kategori detay sayfası
        </div>
    )
}
export default Category;