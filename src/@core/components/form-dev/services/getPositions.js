import { clientAxios } from '../../../../configs/axiosConfig'

export const getPositions = async () => {
    try {
        const { data } = await clientAxios.get("/position")
        const { result = [], message = "" } = data
        return { result, message }
    } catch (error) {
        console.log("getPositions ~ error", error)
        return { result: [], message: "Ocurrió un error" }
    }
}