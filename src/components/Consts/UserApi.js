import api from "./Axios"

const baseURl = 'http://192.168.18.98:4000/users'
export const getUser = async () => {
    return await api.get(baseURl)
}
export const deleteUser = async (payload) => {
    return await api.delete(`${baseURl}/${payload._id}`,{payload})
}
export const editUser = async (inputValues) => {
    return await api.put(`${baseURl}/${inputValues.id.id}`,{...inputValues})
}
export const postUser = async (newValues) => {
    return await api.post(`${baseURl}`,{...newValues})
}