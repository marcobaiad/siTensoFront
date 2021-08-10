import { clientAxios } from '../../../../configs/axiosConfig'

export async function deleteSkill({ skillID }) {
    try {
        const { status } = await clientAxios.delete(`/skill/${skillID}`)
        return { status }
    } catch (error) {
        console.log(error)
        const { response } = error
        const { status } = response
        return { status }
    }
}

