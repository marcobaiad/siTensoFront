import { clientAxios } from '../../../../configs/axiosConfig'

async function postDev({ developer }) {
    try {
        const { data } = await clientAxios.post("/developers", developer)
        const { lastID = 0 } = data
        return { lastID }
    } catch (error) {
        console.log(error)
    }
}

export default postDev