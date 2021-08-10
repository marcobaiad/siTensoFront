import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'reactstrap'
import Swal from 'sweetalert2'
import { handleChangeNewPosition, handleSetPositionsDevs } from '../../../../redux/actions/devs'
import FormAdd from '../../form-add'
import ListElement from '../../list-elements'
import { deletePosition } from '../services/deletePosition'
import { postPosition } from '../services/postPosition'

function PositionsTab() {

    const dispatch = useDispatch()
    const positions = useSelector(state => state.devs.positionsDevs)
    const newPosition = useSelector(state => state.devs.newPosition)

    const handlerChange = (e) => {
        dispatch(handleChangeNewPosition({ [e.target.name]: e.target.value }))
    }

    const deletePositionHandler = async (position) => {
        const { status } = await deletePosition({ positionID: position.positionID })
        if (status === 204) {
            const positionsFiltered = positions.filter(p => p.positionID !== position.positionID)
            dispatch(handleSetPositionsDevs(positionsFiltered))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrió un error',
                text: 'No se pudo borrar la posición, por favor intente nuevamente más tarde'
            })
        }
    }

    const newPositionHandler = async (e) => {
        if (!!newPosition?.positionName === false) {
            e.preventDefault()
            Swal.fire({
                icon: "error",
                title: "Ocurrió un error",
                text: "El campo Posición es Requerido"
            })
            return
        }
        const { lastID, message = "", status } = await postPosition({ newPosition })
        if (message.includes("Successfully")) {
            dispatch(handleSetPositionsDevs([...positions, { positionID: lastID, ...newPosition, positionState: "1" }]))
            Swal.fire({
                icon: "success",
                title: "Posición Guardada con éxito"
            })
        } else if (status === 422) {
            Swal.fire({
                icon: "error",
                title: "Ocurrió un error",
                text: "El campo Posición es Requerido"
            })
        }
        dispatch(handleChangeNewPosition({}))
    }

    return (
        <>
            <FormAdd onsubmitFunct={e => {
                e.preventDefault()
                newPositionHandler(e)
            }}
                inputName="positionName"
                inputValue={newPosition.positionName}
                onchangeFunct={handlerChange}
            />
            <Col sm="12" style={{ overflowY: 'scroll', maxHeight: '150px' }}>
                {
                    positions?.map(position => <ListElement label={position.positionName} deleteFunct={() => deletePositionHandler(position)} />)
                }
            </Col>
        </>
    )
}

export default PositionsTab