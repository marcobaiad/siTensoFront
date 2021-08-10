import { clientAxios } from '../../../../configs/axiosConfig'

async function editDev({ developerID, ...rest }) {
    try {
        const { data } = await clientAxios.put(`/developers/${developerID}`, rest)
        const { message = "" } = data
        return { message }
    } catch (error) {
        console.log(error)
        const { response } = error
        const { message = "" } = response
        return { message }
    }
}

export default editDev