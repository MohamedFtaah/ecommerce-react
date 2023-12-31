import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/reducer.js/authSlice";
import notify from "../useNotifaction";
import { useNavigate } from "react-router-dom";

export default function ForgetPpasswordHook() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    const [mail, setMail] = useState('')


    const ChangMail = (e) => { setMail(e.target.value) }
    const onSupmt = async () => {
        setLoading(true)
        localStorage.setItem('user-email', mail)
        await dispatch(forgetPassword(
            {
                email: mail
            }
        ));
        setLoading(false)
    }

    const res = useSelector(state => state.authData.forgetPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.data?.status === 'Success') {
                    notify('تم ارسال الكود بنجاح', 'success')
                    setTimeout(() => {
                        navigate('/user/verify-code')
                    }, 1000)
                }
                if (res.response?.data.status === 'fail') {
                    notify('اسم الحساب غير صحيح', 'error')
                }

            }
        }

    }, [loading])


    return [mail, ChangMail, onSupmt]
}
