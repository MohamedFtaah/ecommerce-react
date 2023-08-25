import { useEffect, useState } from "react"
import { UpdateProducts, getAllProducts, getOneProducts } from "../../redux/reducer.js/productSlice"
import { useDispatch, useSelector } from "react-redux"
import { getAllCategorys } from "../../redux/reducer.js/categorySlice"
import { getAllbrand } from "../../redux/reducer.js/brandSlice"

import notify from '../useNotifaction';
import { getSupCategoryPyCategory } from "../../redux/reducer.js/supCategorySlice"
export default function EditProductsHook(id) {
    const dispatch = useDispatch()
    // dispatch data
    useEffect(() => {
        const run = async () => {
            await dispatch(getAllCategorys(`/api/v1/categories`))
            await dispatch(getAllbrand(`/api/v1/brands`))
            await dispatch(getOneProducts(`/api/v1/products/${id}`))
        }
        run()
    }, [dispatch])





    const item = useSelector(state => state.ProductsDate.OneProducts)

    const islod = useSelector(state => state.ProductsDate.isLioding)
    const res = useSelector(state => state.ProductsDate.products)

    const date = useSelector(state => state.categorysDate.categorys)
    const supDate = useSelector(state => state.supCategorysDate.supCategorys)
    const prandDate = useSelector(state => state.brandDate.brand)
    const [isPress, setIsPress] = useState(false)

    //
    const [subCategory, setSubCategory] = useState([])
    const [CategoryID, setCategoryID] = useState(0)
    const [brandID, setBrandID] = useState('')
    // save ras of data
    const [title, setTitle] = useState('')
    const [detalis, setDetalis] = useState('')
    const [quantity, setQuantity] = useState('السعر قبل الخصم')
    const [price, setPrice] = useState("سعر المنتج")
    const [qty, setQty] = useState('الكمية المتاحة')
    const [options, setOptions] = useState([])
    // save input fo data

    useEffect(() => {
        if (item.data) {
            setTitle(item.data.title)
            setDetalis(item.data.description)
            setQty(item.data.quantity)
            setPrice(item.data.price)
            setCategoryID(item.data.category)
            setBrandID(item.data.brand)
            setColors(item.data.availableColors)
            setImages(item.data.images
            )
        }
    }, [item])


    // save dif data



    const changeCategoryID = async (e) => {
        setCategoryID(e.target.value)
        await dispatch(getSupCategoryPyCategory(`/api/v1/categories/${CategoryID}/subcategories`))
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
        if (CategoryID != 0) {
            const run = async () => {
                await dispatch(getSupCategoryPyCategory(`/api/v1/categories/${CategoryID}/subcategories`))
            }
            run()
        }
    }, [CategoryID])

    useEffect(() => {
        if (supDate.data) {
            setOptions(supDate.data)
        }
    }, [supDate?.data])

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

    async function createFile(urlIMG) {
        let response = await fetch(urlIMG);
        let data = await response.blob();
        let metadata = {
            type: 'image/jpeg'
        };
        let file = new File([data], "test.jpg", metadata);
        return file
    }


    // img on change


    const onSelect = (e) => {
        setSubCategory(e)
    }
    const onRemove = (e) => {
        setSubCategory(e)
    }
    // to save data
    const handilSubmit = async (e) => {
        e.preventDefault();




















        if (qty === 'الكمية المتاحة' || price === "سعر المنتج" || quantity === 'السعر قبل الخصم' || detalis === '' || title === '' || brandID === '' || CategoryID === '' || images < 1) {
            notify('يجب ادخال البيانات ', 'warn')
            return
        }

        let imageCover

        if (images[0].length <= 1000) {
            imageCover = await createFile((images[0]))
            console.log(imageCover)
        } else {
            imageCover = dataURLtoFile(images[0], Math.random() + '.png')
            console.log(imageCover)

        }



        const formData = new FormData();
        let imagesFila = []
        Array.from(Array(Object.keys(images).length).keys()).map((d, i) => {
            if (images[i].length <= 1000) {
                createFile(images[i]).then((v) => { imagesFila.push(v) })

            } else { imagesFila.push(dataURLtoFile(images[i], Math.random() + '.png')) }
        })

        formData.append('title', title)
        formData.append("category", CategoryID)
        formData.append("description", detalis)
        formData.append("quantity", qty)
        formData.append("price", price)
        formData.append("brand", brandID)
        Colors.map((color) => formData.append("availableColors", color))
        setTimeout(async () => {
            imagesFila.map((Fila) => formData.append("images", Fila));
            formData.append("imageCover", imageCover)
            await console.log(imagesFila);

        }, 1000);
        subCategory.map((subCategory) => formData.append("subcategory", subCategory._id))
        setIsPress(true)
        const data = {
            url: id,
            formData: formData
        }
        setTimeout(async () => {
            await dispatch(UpdateProducts(data))

        }, 1000);



    }
    useEffect(
        () => {
            if (islod === false) {

                setTimeout(() => { setIsPress(false) }, 1000)
                // validation
                if (res.status === 200) {
                    notify('تم الاضافة بنجاج', 'success')
                } else {
                    notify("لم يتم الاضافة", 'error')
                    console.log(res)
                }
            }
        }, [islod])

    return [handilSubmit, handilChangColor, selectColor, removeColor, Colors, prandDate, brandID, onRemove, onSelect, options, date, CategoryID, qty, price, quantity, detalis, title, changeQty, changePrice, changeQuantity, changeDetalis, changeTitle, changeBrandID, changeCategoryID, images, setImages, show, isPress, islod]

}














