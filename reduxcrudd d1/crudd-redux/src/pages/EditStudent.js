import React, { useEffect, useState } from "react";
import Header from "../components/Header"
import { useParams } from "react-router-dom";
import axios from "axios";
import Loading from "../components/Loading";

/* 
1. store'daki veriler sayfa yenilenince sıfırlanır
Tekrar anasayfaya giderek verileri baştan çekmemiz lazım.
Bu şekilde store'dan öğrenci bilgisi çekmeye çalıştığımız
anda HATA ALIRIZ
2.Path üzerinden okuduğumuz id ile server'a giderek
öğrenci bilgisini istediğimiz yöntemde sayfa yenilense bile
aynı şekilde bilgiler tekrar alınır. HATA ALMAYIZ
*/

const EditStudent = () => {
    useEffect(() => {
        axios.get(`http://localhost:3004/students/`)
            .then(res => {
                const myStudent=res.data.find(item=>item.id===studentId)
                setStudents(res.data)
                setFirstName(myStudent.firstName)
                setLastName(myStudent.lastName)
                setNumber(myStudent.number)
                setStdClass(myStudent.class)
                setSchool(myStudent.school)
            })
            .catch(err => { console.log(err) })

    }, [])
    const [students, setStudents] = useState(null)
    const [number, setNumber] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [school, setSchool] = useState("")
    const [stdClass, setStdClass] = useState("")
    const { studentId } = useParams()
    const handleSubmit = (event) => {
        event.preventDefault();
        if (!number || !firstName || !lastName || !school || !stdClass) {
            alert("Bütün alanları doldurmak zorunludur")
            return;
        }
    }
    const myStudent=students.find(item=>item.id === studentId)    
    const filteredStudents=students.filter(item=>item.number !== myStudent.number)
    const hasStudent = filteredStudents.find(item=>item.number === number)
    if(hasStudent){
    alert(`Girdiğiniz numara ${hasStudent.firstName} isimli öğrenciye aittir`);
    return;
}
const updatedStudent={
    ...myStudent,
    number:number,
    firstName:firstName,
    lastName:lastName,
    school:school,
    class:stdClass
}
axios.put(`http://localhost:3004/students/${studentId}`,updatedStudent)
.then(res=>{})
.catch(err=>console.log(err))


    if (students === null) {
        return <Loading />

    }
    return (
        <div>
            <Header />
            <div className="container d-flex justify-content-center my-5">
                <form onSubmit={handleSubmit} className="w-75">
                    <div className="mb-3 mt-4">
                        <label
                            htmlFor="number"
                            className="form-label">
                            Öğrenci Numarası
                        </label>
                        <input
                            value={number}
                            onChange={(event) => setNumber(event.target.value)}
                            type="text"
                            class="form-control"
                            id="number" />
                    </div>
                    <div className="mb-3 mt-4">
                        <label
                            htmlFor="number"
                            className="form-label">
                            Öğrenci Adı
                        </label>
                        <input
                            value={firstName}
                            onChange={event => setNumber(event.target.value)}
                            type="text"
                            class="form-control"
                            id="firstName" />
                    </div>
                    <div className="mb-3 mt-4">
                        <label
                            htmlFor="lastName"
                            className="form-label">
                            Öğrenci Soyadı
                        </label>
                        <input
                            value={lastName}
                            onChange={event => setNumber(event.target.value)}
                            type="text"
                            class="form-control"
                            id="lastName" />
                    </div>
                    <div className="mb-3 mt-4">
                        <label
                            htmlFor="school"
                            className="form-label">
                            Okulu
                        </label>
                        <input
                            value={school}
                            onChange={event => setSchool(event.target.value)}
                            type="text"
                            class="form-control"
                            id="school" />
                    </div>
                    <div className="mb-3 mt-4">
                        <label
                            htmlFor="class"
                            className="form-label">
                            Sınıfı
                        </label>
                        <input
                            value={stdClass}
                            onChange={event => setStdClass(event.target.value)}
                            type="text"
                            class="form-control"
                            id="class" />
                        <div className="d-flex justify-content-center mt-5">
                            <button disabled={!number || !firstName || !lastName || !school || !stdClass} type="submit" className="btn btn-primary w-50">
                                Güncelle
                            </button>
                        </div>
                    </div>

                </form>
            </div>

        </div>
    )
}

export default EditStudent;