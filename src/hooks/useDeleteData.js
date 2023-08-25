import baseUrl from "../Components/Api/baseUrl"

export default async function useDeleteData(url, parmas) {
    const res = await baseUrl.delete(url)
    console.log(url)
    return res

}
