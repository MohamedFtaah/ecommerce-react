import avatar from '../../images/avatar.png'
import { creatBrand } from '../../redux/reducer.js/brandSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useEffect } from 'react'
import notify from '../useNotifaction'
export default function AddBrandHook() {
    const islod = useSelector(state => state.brandDate.isLioding)
    const res = useSelector(state => state.brandDate.brand)
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
            return
        }
        const formData = new FormData();
        formData.append('name', name)
        formData.append("image", selectedFile)
        setIsPress(true)
        await dispatch(creatBrand(formData))

    }
    useEffect(
        () => {
            if (islod === false) {
                setImg(avatar)
                setName('')
                setSelectedFile(null)
                setTimeout(() => { setIsPress(false) }, 1000)
                // validation
                if (res.status === 201) {
                    notify('تم الاضافة بنجاج', 'success')
                } else {
                    notify("لم يتم الاضافة", 'error')

                }
            }


        }, [islod])
    return [islod, name, isPress, img, handilSubmit, onImageChange, onChangeName]

}
