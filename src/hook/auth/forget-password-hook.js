import { useState } from "react";
import { useDispatch } from "react-redux";
import { forgetPassword } from "../../redux/reducer.js/authSlice";

export default function ForgetPpasswordHook() {
    const dispatch = useDispatch()

    const [mail, setMail] = useState('')
    const ChangMail = (e) => { setMail(e.target.value) }
    const onSupmt = async () => {
        // // dispatch(forgetPassword(
        // //     {
        // //         email: mail
        // //     }
        // ))
    }


    return [mail, ChangMail, onSupmt]
}
