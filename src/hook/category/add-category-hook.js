import React from 'react'
import avatar from '../../images/avatar.png'
import { useDispatch, useSelector } from 'react-redux'
import { creatCategory } from '../../redux/reducer.js/categorySlice'
import { wait } from '@testing-library/user-event/dist/utils'
import notify from '../useNotifaction'
import { useState } from 'react'
import { useEffect } from 'react'

export default function AddCategoryHook() {

    const islod = useSelector(state => state.categorysDate.isLioding)
    const res = useSelector(state => state.categorysDate.categorys)
    const dispatch = useDispatch()
    const [img, setImg] = useState(avatar)
    const [isPress, setIsPress] = useState(false)
    const [name, setName] = useState('')
    const [selectedFile, setSelectedFile] = useState(null)
    // to change states
    const onChangeName = (e) => setName(e.target.value)




    //when img change
    const onImageChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImg(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    const handilSubmit = async (e) => {
        e.preventDefault();
        if (name === '' || selectedFile === null) {
            notify('يجب ادخال البيانات ', 'warn')

            console.log('ادخل البيانات')
            return
        }
        const formData = new FormData();
        formData.append('name', name)
        formData.append("image", selectedFile)
        console.log(formData)
        setIsPress(true)

        await dispatch(creatCategory(formData))

    }

    useEffect(
        () => {
            if (islod === false) {
                setImg(avatar)
                setName('')
                setSelectedFile(null)
                console.log(islod)
                setTimeout(() => { setIsPress(false) }, 1000)
                // validation
                if (res.status === 201) {
                    console.log(res)
                    notify('تم الاضافة بنجاج', 'success')
                } else {
                    notify("لم يتم الاضافة", 'error')
                }
            }


        }, [islod]
    )
    return [islod, name, isPress, img, handilSubmit, onImageChange, onChangeName]
}
