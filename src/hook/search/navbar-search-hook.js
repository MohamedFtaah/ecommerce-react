import { useState } from "react"
import ViewSearchProductHook from "../product/view-search-product-hook"
import { useEffect } from "react"

export default function NavBarSeearchHook() {
    const [item, pageDate, onPress, getProducts, itemLength] = ViewSearchProductHook()
    const [searchWord, setSearchWord] = useState('')



    const onChangeSearch = (e) => {
        localStorage.setItem('searchWord', e.target.value)
        setSearchWord(e.target.value)
    }
    const startSearch = () => {
        if (window.location.pathname != '/products') {
            window.location.pathname = '/products'
        }
        setTimeout(() => {

            getProducts()
        }, 1000)
    }


    return [onChangeSearch, searchWord, startSearch]
}
