import { useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginUser } from "../../redux/reducer.js/authSlice";
export default function LoginHook() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [loading, setLoading] = useState(true)

    const ChangMail = (e) => { setMail(e.target.value) }
    const ChangPass = (e) => { setPass(e.target.value) }

    function validateEmail(email) {
        const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return res.test(String(email).toLowerCase());
    }


    const validationValues = () => {

        if (validateEmail(mail) === false) {
            notify('يجب ان يحتوي الميل علي حروف وارقام ورمز @', 'error')
            return
        }
        if (pass === '') {
            notify('يجب ان لا تقل كلمة السر عن 8 حروف', 'error')
            return
        }
    }
    const onSupmt = async () => {
        validationValues()
        setLoading(true)
        await dispatch(loginUser({
            "email": mail,
            "password": pass,
        }))
        setLoading(false)
    }


    const res = useSelector(state => state.authData.loginUser)

    useEffect(() => {
        if (loading === false) {
            if (res) {

                if (res.data?.token) {
                    localStorage.setItem('token', res.data.token)
                    localStorage.setItem('user', JSON.stringify(res.data.data))

                    notify('تم تمتسيل الدخول بنجاح', 'success')

                    setTimeout(() => { window.location.href = '/' }, 2000);

                } else {
                    localStorage.removeItem('token')
                    localStorage.removeItem('user')
                    notify('يوجد خطأ في البريد الاكتروني او كلمة المرور', 'error')

                }
            }
        }
    }, [loading])


    return [mail, pass, loading, ChangMail, ChangPass, onSupmt]
}
