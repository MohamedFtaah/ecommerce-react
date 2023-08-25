import { useDispatch, useSelector } from 'react-redux';
import { getAllCategorys } from '../../redux/reducer.js/categorySlice';
import { getAllbrand } from '../../redux/reducer.js/brandSlice';
import { useEffect, useState } from 'react';
import { creatProducts } from '../../redux/reducer.js/productSlice';
import { getSupCategoryPyCategory } from '../../redux/reducer.js/supCategorySlice';
import notify from '../useNotifaction';
export default function AddProductHook() {
    const dispatch = useDispatch()
    const islod = useSelector(state => state.ProductsDate.isLioding)
    const res = useSelector(state => state.ProductsDate.products)

    const date = useSelector(state => state.categorysDate.categorys)
    const supDate = useSelector(state => state.supCategorysDate.supCategorys)
    const prandDate = useSelector(state => state.brandDate.brand)
    const [isPress, setIsPress] = useState(false)

    //
    const [subCategory, setSubCategory] = useState([])
    const [CategoryID, setCategoryID] = useState('')
    const [brandID, setBrandID] = useState('')
    // save ras of data
    const [title, setTitle] = useState('')
    const [detalis, setDetalis] = useState('')
    const [quantity, setQuantity] = useState('السعر قبل الخصم')
    const [price, setPrice] = useState("سعر المنتج")
    const [qty, setQty] = useState('الكمية المتاحة')

    // save input fo data
    const changeCategoryID = (e) => {
        setCategoryID(e.target.value)
        dispatch(getSupCategoryPyCategory(`/api/v1/categories/${CategoryID}/subcategories`))
    }
    const changeBrandID = (e) => { setBrandID(e.target.value) }
    const changeTitle = (e) => { setTitle(e.target.value) }
    const changeDetalis = (e) => { setDetalis(e.target.value) }
    const changeQuantity = (e) => { setQuantity(e.target.value) }
    const changePrice = (e) => { setPrice(e.target.value) }
    const changeQty = (e) => { setQty(e.target.value) }
    // change states

    const [show, setshow] = useState(false)
    const [Colors, setColors] = useState([])
    const handilChangColor = (color) => {
        setColors([...Colors, color.hex])
        setshow(!show)

    }

    const selectColor = () => {
        setshow(!show)
    }
    const removeColor = (color) => {
        setColors(Colors.filter((e) => e !== color)
        )
    }
    //select Color
    useEffect(() => {
        dispatch(getAllCategorys(`/api/v1/categories`))
        dispatch(getAllbrand(`/api/v1/brands`))
    }, [dispatch])

    useEffect(() => {
        dispatch(getSupCategoryPyCategory(`/api/v1/categories/${CategoryID}/subcategories`))

    }, [CategoryID])



    const [images, setImages] = useState([]);


    function dataURLtoFile(dataurl, filename) {
        var arr = dataurl.split(','),
            mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[arr.length - 1]),
            n = bstr.length,
            u8arr = new Uint8Array(n);
        while (n--) {
            u8arr[n] = bstr.charCodeAt(n);
        }
        return new File([u8arr], filename, { type: mime });
    }



    // img on change


    const onSelect = (e) => {
        setSubCategory(e)
    }
    const onRemove = (e) => {
        setSubCategory(e)
    }
    // to save data
    const options = supDate.data
    const handilSubmit = async (e) => {
        e.preventDefault();
        if (qty === 'الكمية المتاحة' || price === "سعر المنتج" || quantity === 'السعر قبل الخصم' || detalis === '' || title === '' || brandID === '' || CategoryID === '' || images < 1) {
            notify('يجب ادخال البيانات ', 'warn')
            return
        }
        const imageCover = dataURLtoFile(images[0], Math.random() + '.png')
        const imagesFila = Array.from(Array(Object.keys(images).length).keys()).map((d, i) => {
            return dataURLtoFile(images[i], Math.random() + '.png')
        })
        const formData = new FormData();
        formData.append('title', title)
        formData.append("imageCover", imageCover)
        formData.append("category", CategoryID)
        formData.append("description", detalis)
        formData.append("quantity", qty)
        formData.append("price", price)
        formData.append("brand", brandID)
        Colors.map((color) => formData.append("availableColors", color))
        imagesFila.map((Fila) => formData.append("images", Fila));
        subCategory.map((subCategory) => formData.append("subcategory", subCategory._id))
        setIsPress(true)

        await dispatch(creatProducts(formData))

    }
    useEffect(
        () => {
            if (islod === false) {

                setTimeout(() => { setIsPress(false) }, 1000)
                // validation
                if (res.status === 201) {
                    notify('تم الاضافة بنجاج', 'success')
                } else {
                    notify("لم يتم الاضافة", 'error')
                    console.log(res)
                }
            }
        }, [islod])

    return [handilSubmit, handilChangColor, selectColor, removeColor, Colors, prandDate, brandID, onRemove, onSelect, options, date, CategoryID, qty, price, quantity, detalis, title, changeQty, changePrice, changeQuantity, changeDetalis, changeTitle, changeBrandID, changeCategoryID, images, setImages, show, isPress, islod]
}

