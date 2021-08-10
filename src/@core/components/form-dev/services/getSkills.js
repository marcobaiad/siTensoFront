import { clientAxios } from '../../../../configs/axiosConfig'

export const getSkills = async () => {
    try {
        const { data } = await clientAxios.get("/skill")
        const { result = [], message = "" } = data
        return { result, message }
    } catch (error) {
        console.log("getSkills ~ error", error)
        return { result: [], message: "Ocurrió un error" }
    }
}