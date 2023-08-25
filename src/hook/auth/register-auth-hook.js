import { useState } from "react";
import notify from "../useNotifaction";
import { useDispatch, useSelector } from 'react-redux';
import { creatUser } from "../../redux/reducer.js/authSlice";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export default function RegisterHook() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [name, setName] = useState('')
    const [mail, setMail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [phone, setPhone] = useState('')
    const [loading, setLoading] = useState(true)

    const ChangName = (e) => { setName(e.target.value) }
    const ChangMail = (e) => { setMail(e.target.value) }
    const ChangPass = (e) => { setPass(e.target.value) }
    const ChangConfirmPass = (e) => { setConfirmPass(e.target.value) }
    const ChangPhone = (e) => { setPhone(e.target.value) }
    const ChangLoading = () => { }


    function validateEmail(email) {
        const res = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
        return res.test(String(email).toLowerCase());
    }




    const validationValues = () => {
        if (name === '') {
            notify('ادخل الاسم', 'error')
            return
        }
        if (validateEmail(mail) === false) {
            notify('يجب ان يحتوي الميل علي حروف وارقام ورمز @', 'error')
            return
        }
        if (pass === '') {
            notify('يجب ان لا تقل كلمة السر عن 8 حروف', 'error')
            return
        }
        if (pass !== confirmPass) {
            notify('يجب ان يتساوي مع كلمه السر', 'error')
            return
        }
        if (phone.length <= 10) {
            notify('ادحل رقم هاتف صحيح', 'error')
            return
        }
    }

    const onSupmt = async () => {
        validationValues()
        setLoading(true)
        await dispatch(creatUser({
            "name": name,
            "email": mail,
            "password": pass,
            "passwordConfirm": confirmPass,
            "phone": phone

        }))
        setLoading(false)
    }
    const res = useSelector(state => state.authData.creatUser)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);

                if (res.data?.token) {
                    localStorage.setItem('token', res.data.token)
                    notify('تم انشاء حساب بنجاح', 'success')

                    setTimeout(() => { navigate('/') }, 2000);
                }

                if (res.response?.data.errors) {
                    res.response.data.errors.forEach(error => { notify(error.msg, 'error') }
                    )

                }
            }
        }
    }, [loading])
    return [ChangName, ChangMail, ChangPass, ChangConfirmPass, ChangPhone, name, mail, pass, confirmPass, phone, loading, onSupmt]
}
