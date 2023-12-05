import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function UserProfilePageHook() {
    const navigate = useNavigate()

    const [user, setUser] = useState('')
    useEffect(() => {
        if (localStorage.getItem('user') != null) {
            setUser(JSON.parse(localStorage.getItem('user')))
            console.log(JSON.parse(localStorage.getItem('user')));
        } else {
            navigate('/login')

        }

    }, [])


    return [user]
}
