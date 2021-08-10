import { clientAxios } from '../../../../configs/axiosConfig'

export async function postSkill({ newSkill }) {
    try {
        const { data } = await clientAxios.post("/skill", newSkill)
        const { message = "", lastID } = data
        return { message, lastID }
    } catch (error) {
        const { response } = error
        const { status, data } = response
        const { errors, message } = data
        return { status, errors, message }
    }
}