import { clientAxios } from '../../../../configs/axiosConfig'

export async function deletePosition({ positionID }) {
    try {
        const { status } = await clientAxios.delete(`/position/${positionID}`)
        console.log("deletePosition ~ status", status)
        return { status }
    } catch (error) {
        console.log(error)
        const { response } = error
        const { status } = response
        return { status }
    }
}