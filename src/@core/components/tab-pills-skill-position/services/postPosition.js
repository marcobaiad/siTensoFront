import { clientAxios } from '../../../../configs/axiosConfig'

export async function postPosition({ newPosition }) {
    try {
        const { data } = await clientAxios.post("/position", newPosition)
        const { message = "", lastID } = data
        return { message, lastID }
    } catch (error) {
        const { response } = error
        const { status, data } = response
        const { errors, message } = data
        return { status, errors, message }
    }
}