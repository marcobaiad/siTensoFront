import React from 'react'
import { Edit, Trash2 } from 'react-feather'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { DropdownMenu, DropdownToggle, UncontrolledDropdown, DropdownItem } from 'reactstrap'
import { handleChangeDev, handleSetDevs } from '../../../redux/actions/devs'
import { Toast } from '../../../configs/toastConfig'
import deleteDeveloper from '../form-dev/services/deleteDeveloper'
import Swal from 'sweetalert2'

function DropdownActions({ row }) {

  const dispatch = useDispatch()
  const devs = useSelector(state => state.devs.devs)

  const deleteDevHandler = async ({ developerID }) => {
    const { status } = await deleteDeveloper({ developerID })
    if (status === 204) {
      const removedDev = devs.filter(dev => dev.developerID !== developerID)
      dispatch(handleSetDevs(removedDev))
      Toast.fire({
        icon: 'success',
        title: 'Desarrollador borrado con Éxito'
      })
    } else {
      Toast.fire({
        icon: 'error',
        title: 'Ocurrió un error, intente nuevamente más tarde'
      })
    }
  }

  const confirmDeleteDevHandler = ({ developerID }) => {
    Swal.fire({
      icon: "warning",
      title: "Estás por borrar un desarrollador",
      text: "Estás seguro/a de continuar?",
      showCancelButton: true
    }).then(result => {
      if (result.isConfirmed) {
        deleteDevHandler({ developerID })
      }
    })
  }

  return (
    <UncontrolledDropdown tag='li' className='dropdown-actions nav-link'>
      <DropdownToggle href='/' tag='a' className='nav-link' onClick={e => e.preventDefault()}>
        <i className="fas fa-ellipsis-v" role="button"></i>
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem tag={Link} to='/editar' onClick={() => {
          dispatch(handleChangeDev(row))
        }}>
          <Edit size={14} className='mr-75' />
          <span className='align-middle'>Editar</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='' onClick={e => {
          // dispatch()
          e.preventDefault()
          confirmDeleteDevHandler({ developerID: row.developerID })
        }}>
          <Trash2 size={14} className='mr-75' />
          <span className='align-middle'>Borrar</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default DropdownActions