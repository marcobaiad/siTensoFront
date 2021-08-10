import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Button, Form, FormGroup, Label, Input, Col } from 'reactstrap'
import Row from 'reactstrap/lib/Row'
import { Toast } from '../../../configs/toastConfig'
import { handleSetPositionsDevs, handleSetSkillsDevs, handleChangeDev, handleSetDevs } from '../../../redux/actions/devs'
import SelectInput from '../select-input'
import editDev from './services/editDev'
import { getPositions } from './services/getPositions'
import { getSkills } from './services/getSkills'
import postDev from './services/postDev'

function FormDev() {

    const dispatch = useDispatch()
    const history = useHistory()
    const skills = useSelector(state => state.devs.skillsDevs)
    const positions = useSelector(state => state.devs.positionsDevs)
    const changeDev = useSelector(state => state.devs.changeDev)
    const devs = useSelector(state => state.devs.devs)

    const getSkillsHandler = async () => {
        const { result = [], message = "" } = await getSkills()
        if (message.includes("Successfully")) dispatch(handleSetSkillsDevs(result))
    }

    const getPositionsHandler = async () => {
        const { result = [], message = "" } = await getPositions()
        if (message.includes("Successfully")) dispatch(handleSetPositionsDevs(result))
    }

    const newDevHandler = async () => {
        const { lastID } = await postDev({ developer: changeDev })
        if (lastID > 0) {
            const newDev = { ...changeDev, developerID: lastID }
            dispatch(handleSetDevs([...devs, newDev]))
            dispatch(handleChangeDev({}))
            Toast.fire({
                icon: 'success',
                title: 'Desarrollador creado con Éxito'
            })
            history.goBack()
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al intentar guardar el desarrollador'
            })
        }
    }

    const editDevHandler = async () => {
        const { message = "" } = await editDev({ ...changeDev })
        if (message.includes("Successfully")) {
            const filteredCurrentDevs = devs.filter(dev => dev.developerID !== changeDev.developerID)
            dispatch(handleSetDevs([...filteredCurrentDevs, changeDev]))
            Toast.fire({
                icon: 'success',
                title: 'Desarrollador editado con Éxito'
            })
            history.goBack()
        } else {
            Toast.fire({
                icon: 'error',
                title: 'Ocurrió un error al intentar editar el desarrollador'
            })
        }
    }

    const changeHandler = e => {
        dispatch(handleChangeDev({ ...changeDev, [e.target.name]: e.target.value }))
    }

    useEffect(() => {
        getSkillsHandler()
        getPositionsHandler()
    }, [])

    return (
        <Form>
            <Row form className="justify-content-between w-100 mx-0">
                <Col xs={12} md={6} className="mb-3">
                    <FormGroup>
                        <Label for="nameInput">Nombre</Label>
                        <Input name="developerName" id="nameInput" placeholder="Ej: Marco Baiad" onChange={changeHandler} value={changeDev?.developerName ?? ""} autoFocus />
                    </FormGroup>
                </Col>
                <Col xs={12} md={6} className="mb-3">
                    <FormGroup>
                        <Label for="professionInput">Profesión</Label>
                        <Input name="occupation" id="professionInput" placeholder="Diseñador Gráfico"
                            onChange={changeHandler} value={changeDev?.occupation ?? ""}
                        />
                    </FormGroup>
                </Col>
                <Col xs={12} md={6} className="mb-3">
                    {
                        <SelectInput labelText="Puesto" inputID="positionSelect" inputName="position" onchange={changeHandler}>
                            <option hidden>Elegir Puesto</option>
                            {positions?.map(position => <option
                                key={position.positionID}
                                selected={changeDev?.position === position.positionName}
                                value={position.positionName ?? ""}>{position.positionName}</option>)}
                        </SelectInput>
                    }
                </Col>
                <Col xs={12} md={6} className="mb-3">
                    {
                        <SelectInput labelText="Técnología" inputID="skillSelect" inputName="skill" onchange={changeHandler}>
                            <option hidden>Elegir Técnología</option>
                            {
                                skills?.map(skill => <option
                                    key={skill.skillID}
                                    selected={changeDev?.skill === skill.skillName}
                                    value={skill.skillName ?? ""}>{skill.skillName}</option>)
                            }
                        </SelectInput>
                    }
                </Col>
                <Col>
                    <Button color="outline-primary" onClick={() => {
                        history.goBack()
                        dispatch(handleChangeDev({}))
                    }}>Cancelar</Button>
                </Col>
                <Col>
                    <Row className="justify-content-end mx-0">
                        <Button color="primary" onClick={() => {
                            history.location.pathname.includes("agregar") ? newDevHandler() : editDevHandler()
                        }}>{history.location.pathname.includes("agregar") ? "Agregar" : "Editar"}</Button>
                    </Row>
                </Col>
            </Row>
        </Form>
    )
}

export default FormDev