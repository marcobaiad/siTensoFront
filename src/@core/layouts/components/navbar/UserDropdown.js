// ** React Imports
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

// ** Custom Components
import Avatar from '@components/avatar'

// ** Utils
import { isUserLoggedIn } from '@utils'

// ** Store & Actions
import { useDispatch } from 'react-redux'
import { handleLogout } from '@store/actions/auth'

// ** Third Party Components
import { UncontrolledDropdown, DropdownMenu, DropdownToggle, DropdownItem } from 'reactstrap'
import { Power } from 'react-feather'

// ** Default Avatar Image
import defaultAvatar from '@src/assets/images/portrait/small/avatar-s-11.jpg'
import { handleChangeInputUserName, resetUserData } from '../../../../redux/actions/auth'

const UserDropdown = ({ toggleModal, toggleTab }) => {
  // ** Store Vars
  const dispatch = useDispatch()

  // ** State
  const [userData, setUserData] = useState(null)

  //** ComponentDidMount
  useEffect(() => {
    if (isUserLoggedIn() !== null) {
      setUserData(JSON.parse(localStorage.getItem('userData')))
    }
  }, [])

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar

  return (
    <UncontrolledDropdown tag='li' className='dropdown-user nav-item'>
      <DropdownToggle href='/' tag='a' className='nav-link dropdown-user-link' onClick={e => e.preventDefault()}>
        <div className='user-nav d-sm-flex d-none'>
          <span className='user-name font-weight-bold'>{(userData && userData['username']) || 'John Doe'}</span>
          <span className='user-status'>{(userData && userData.role) || 'Admin'}</span>
        </div>
        <Avatar img={userAvatar} imgHeight='40' imgWidth='40' status='online' />
      </DropdownToggle>
      <DropdownMenu right container="body">
        <DropdownItem tag={Link} to='#' onClick={(e) => {
          e.preventDefault()
          toggleModal(true)
          toggleTab("1")
        }}
        >
          <i className="fas fa-user-cog mr-75"></i>
          <span className='align-middle'>Posiciones</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='#' onClick={(e) => {
          e.preventDefault()
          toggleModal(true)
          toggleTab("2")
        }}
        >
          <i className="fas fa-code mr-75"></i>
          <span className='align-middle'>Lenguajes</span>
        </DropdownItem>
        <DropdownItem tag={Link} to='/login' onClick={() => {
          dispatch(handleLogout())
          dispatch(handleChangeInputUserName(""))
          dispatch(resetUserData())
        }}
        >
          <Power size={14} className='mr-75' />
          <span className='align-middle'>Salir</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

export default UserDropdown
