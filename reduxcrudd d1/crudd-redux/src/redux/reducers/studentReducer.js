import actionTypes from "../actions/actionTypes"
/*
1. initialState oluştur
2. reducer fonk oluştur
*/
const initialState={
    start: false, //başlamadı
    success: false, //başarılı olmadı
    students: [], // başarılıysa gelen öğrenciler
    fail: false, //başarısız olmadı
    error: "" // hata yerine boş string
}

const studentsReducer=(state=initialState,action)=>{
    switch (action.type){
        case actionTypes.FETCH_STUDENTS_START:
            return{
                ...state,
                start:true
            }
        case actionTypes.FETCH_STUDENTS_SUCCESS:
            return{
                ...state,
                fail:false,
                start:false,
                success:true,
                students:action.payload
            }
        case actionTypes.FETCH_STUDENTS_FAIL:
            return{
                ...state,
                start:false,
                fail:true,
                error:action.payload
            }
        case actionTypes.ADD_STUDENT:
            return{
                ...state,
                students:[...state.students,action.payload]
            }
        case actionTypes.DELETE_STUDENT: 
            const filteredStudents=state.students.filter(
                item=> item.id !== action.payload
            )
        return{
            ...state,
            students: filteredStudents
        }
        default:
            return state
    }
}

export default studentsReducer