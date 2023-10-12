import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import axios from "axios";
import actionTypes from "../redux/actions/actionTypes";

const ListStudents = () => {
  const dispatch=useDispatch();
  const {studentsState} = useSelector(state => state)
  const handleDelete=(id)=>{
    axios.delete(`http://localhost:3004/students/${id}`)
    .then(res=>{
      dispatch({type:actionTypes.DELETE_STUDENT,payload:id})
    })
    .catch(err=>{

    })

  }
  return (
    <div className="container my-5">
      <div className="d-flex justify-content-end">
        <Link to="/add-student" className="btn btn-primary">Öğrenci Ekle</Link>
      </div>
      <table className="table table-strip">
        <thead>
          <tr>
            <th>Öğrenci No</th>
            <th>Adı</th>
            <th>Soyadı</th>
            <th>Okulu</th>
            <th>Sınıfı</th>
            <th>İşlemler</th>
          </tr>
        </thead>
        <tbody>
          {studentsState.students.map((student) => (
            <tr key={student.id}>
              <th>{student.number}</th>
              <td>{student.firstName}</td>
              <td>{student.lastName}</td>
              <td>{student.school}</td>
              <td>{student.class}</td>
              <td>
                <div className="btn-group">
                  <Link to={`/edit-student/${student.id}`} className="btn btn-sm btn-secondary">Düzenle</Link>
                  <button
                    type="button" className="btn btn-sm btn-danger"
                    onClick={()=>handleDelete(student.id)}
                    >Sil</button>
                </div>
              </td>
            </tr>
          ))
          }
        </tbody>
      </table>
    </div>
  )
}
export default ListStudents;