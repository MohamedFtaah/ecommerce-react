import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import notify from '../useNotifaction'
import { resetPassword } from '../../redux/reducer.js/authSlice'

export default function ResetPasswordHook() {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [confirmPass, setConfirmPass] = useState('')
    const [newPass, setNewPass] = useState('')
    const [loading, setLoading] = useState(true)

    const ChangConfirmPass = (e) => { setConfirmPass(e.target.value) }
    const ChangNewPass = (e) => { setNewPass(e.target.value) }


    const onSupmt = async () => {

        if (newPass !== confirmPass) {
            notify('خطا في كلمه السر', 'error')
            return
        }

        setLoading(true)

        await dispatch(resetPassword(
            {
                email: localStorage.getItem('user-email'),
                newPassword: newPass
            }
        ));
        setLoading(false)
    }

    const res = useSelector(state => state.authData.resetPassword)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.data?.token) {
                    notify('تم تغير كلمة السر بنجاح', 'success')
                    setTimeout(() => {
                        navigate('/login')
                    }, 1000)
                }
                if (res.response?.data.status === 'fail') {
                    notify(' احصل علي كود نفعيل اخر', 'error')
                }

            }
        }

    }, [loading])

    return [confirmPass, newPass, loading, ChangConfirmPass, ChangNewPass, onSupmt]
}
