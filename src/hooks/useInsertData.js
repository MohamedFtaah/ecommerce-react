import baseUrl from "../Components/Api/baseUrl"

const useInsertDataWithImage = async (url, parmas) => {
    const config = {
        headers: { 'Content-Type': 'multipart/from-data' }
    }
    const res = await baseUrl.post(url, parmas, config)
    console.log(res)
    return res
}

const useInsertData = async (url, parmas) => {
    const res = await baseUrl.post(url, parmas); console.log(res);

    return res
}
export { useInsertDataWithImage, useInsertData }