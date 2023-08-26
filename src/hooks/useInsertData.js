import baseUrl from "../Components/Api/baseUrl"

const useInsertDataWithImage = async (url, parmas) => {
    const config = {
        headers: {
            'Content-Type': 'multipart/from-data',
            Authorization: `Bearer${localStorage.getItem('token')}`

        }
    }
    const res = await baseUrl.post(url, parmas, config)
    console.log(res)
    return res
}

const useInsertData = async (url, parmas) => {
    const config = {
        headers: {
            Authorization: `Bearer${localStorage.getItem('token')}`

        }
    }
    const res = await baseUrl.post(url, parmas, config); console.log(res);

    return res
}
export { useInsertDataWithImage, useInsertData }