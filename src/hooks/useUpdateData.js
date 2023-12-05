import baseUrl from "../Components/Api/baseUrl"

const useUpdateDataWithImage = async (url, parmas) => {
    const config = {
        headers: { 'Content-Type': 'multipart/from-data' },
        Authorization: `Bearer ${localStorage.getItem('token')}`
    }
    const res = await baseUrl.put(url, parmas, config)
    console.log(res)
    return res
}

const useUpdateData = async (url, parmas) => {

    const res = await baseUrl.put(url, parmas)
    return res
}
export { useUpdateDataWithImage, useUpdateData }