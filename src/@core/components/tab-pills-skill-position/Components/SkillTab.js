import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Col } from 'reactstrap'
import Swal from 'sweetalert2'
import { handleChangeNewSkill, handleSetSkillsDevs } from '../../../../redux/actions/devs'
import FormAdd from '../../form-add'
import ListElement from '../../list-elements'
import { deleteSkill } from '../services/deleteSkill'
import { postSkill } from '../services/postSkill'

function SkillTab() {

    const dispatch = useDispatch()
    const skills = useSelector(state => state.devs.skillsDevs)
    const newSkill = useSelector(state => state.devs.newSkill)

    const handlerChange = (e) => {
        dispatch(handleChangeNewSkill({ [e.target.name]: e.target.value }))
    }

    const deleteSkillHandler = async (skill) => {
        const { status } = await deleteSkill({ skillID: skill.skillID })
        if (status === 204) {
            const skillsFiltered = skills.filter(s => s.skillID !== skill.skillID)
            dispatch(handleSetSkillsDevs(skillsFiltered))
        } else {
            Swal.fire({
                icon: 'error',
                title: 'Ocurrió un error',
                text: 'No se pudo borrar el lenguaje, por favor intente nuevamente más tarde'
            })
        }
    }

    const newSkillHandler = async (e) => {
        if (!!newSkill?.skillName === false) {
            e.preventDefault()
            Swal.fire({
                icon: "error",
                title: "Ocurrió un error",
                text: "El campo Lenguaje es Requerido"
            })
            return
        }
        const { lastID, message = "", status } = await postSkill({ newSkill })
        if (message.includes("Successfully")) {
            dispatch(handleSetSkillsDevs([...skills, { skillID: lastID, ...newSkill, skillState: "1" }]))
            Swal.fire({
                icon: "success",
                title: "Lenguaje Guardado con éxito"
            })
        } else if (status === 422) {
            Swal.fire({
                icon: "error",
                title: "Ocurrió un error",
                text: "El campo Lenguaje es Requerido"
            })
        }
        dispatch(handleChangeNewSkill({}))
    }

    return (
        <>
            <FormAdd onsubmitFunct={e => {
                e.preventDefault()
                newSkillHandler(e)
            }}
                inputValue={newSkill.skillName}
                onchangeFunct={handlerChange}
                placeholderText="Lenguaje" inputName="skillName" />
            <Col sm="12" style={{ overflowY: 'scroll', maxHeight: '150px' }}>
                {
                    skills?.map(skill => <ListElement label={skill.skillName} deleteFunct={() => deleteSkillHandler(skill)} />)
                }
            </Col>
        </>
    )
}

export default SkillTab