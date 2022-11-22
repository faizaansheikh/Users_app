import * as Yup from 'yup';
export const addUserSchema = Yup.object({
    id : Yup.string().required("please enter user id"),
    names : Yup.string().min(3).max(15).required("please enter user name"),
    email : Yup.string().email().required("please enter user email"),
    phone : Yup.string().min(3).max(15).required("please enter user phone no#"),
    address : Yup.string().required("please enter user address"),
})