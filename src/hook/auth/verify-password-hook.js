import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { verifyCode } from "../../redux/reducer.js/authSlice";
import notify from "../useNotifaction";
import { useNavigate } from "react-router-dom";

export default function VerifyPasswordHook() {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    const [code, setCode] = useState('')


    const ChangCode = (e) => { setCode(e.target.value) }
    const onSupmt = async () => {
        setLoading(true)

        await dispatch(verifyCode(
            {
                "resetCode": code
            }
        ));
        setLoading(false)
    }

    const res = useSelector(state => state.authData.verifyCode)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.data?.status === 'Success') {
                    notify('كود التفعيل صحيح', 'success')
                    setTimeout(() => {
                        navigate('/user/reset-password')
                    }, 1000)
                }
                if (res.response?.data.status === 'fail') {
                    notify('كود النفعيل غير صحيح', 'error')
                }

            }
        }

    }, [loading])


    return [code, ChangCode, onSupmt]
}
