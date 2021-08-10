import { clientAxios } from '../../../../configs/axiosConfig'

async function deleteDeveloper({ developerID }) {
    try {
        const { status } = await clientAxios.delete(`/developers/${developerID}`)
        return { status }
    } catch (error) {
        console.log(error)
        return { status: error.status }
    }
}

export default deleteDeveloper