import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { forgetPassword } from "../../redux/reducer.js/authSlice";
import notify from "../useNotifaction";
import { useNavigate } from "react-router-dom";
import { addRate } from "../../redux/reducer.js/rateSlice";

export default function AddRateHook(id) {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const [loading, setLoading] = useState(true)

    const [rateText, setRateText] = useState('')
    const [rateValue, setRateValue] = useState('')
    const [user, setUser] = useState('')
    useEffect(() => {
        if (localStorage.getItem('user') != null) {
            setUser(JSON.parse(localStorage.getItem('user')))
            console.log(JSON.parse(localStorage.getItem('user')));
        }

    }, [])

    const ChangRateText = (e) => { setRateText(e.target.value) }
    const ChangRateValue = (e) => { setRateValue(e) }
    const onSupmt = async () => {
        if (user === '') {

        } else if (user._id) {
            setLoading(true)
            localStorage.setItem('rateText', rateText)
            await dispatch(addRate(
                {
                    review: rateText,
                    rating: rateValue,
                    product: id,
                    user: user._id

                }
            ));
            console.log({
                review: rateText,
                rating: rateValue,
                product: id,
                user: user._id

            });
            setLoading(false)
        }
    }

    const res = useSelector(state => state.rateData.addRate)

    useEffect(() => {
        if (loading === false) {
            if (res) {
                console.log(res);
                if (res.data?.status === 'Success') {
                    notify('تم اضافه تقيم بنجاح  ', 'success')

                }

                if (res.response?.data.errors) {
                    res.response.data.errors.forEach(error => { notify(error.msg, 'error') }
                    )
                }

            }
        }

    }, [loading])


    return [ChangRateText, ChangRateValue, rateText, rateValue, onSupmt, user]
}
