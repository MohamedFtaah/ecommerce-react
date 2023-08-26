import baseUrl from "../Components/Api/baseUrl"

export default async function useDeleteData(url, parmas) {
    const config = {
        headers: {
            Authorization: `Bearer${localStorage.getItem('token')}`

        }
    }
    const res = await baseUrl.delete(url, parmas, config)

    console.log(url)
    return res

}
