// ** Dropdowns Imports
import UserDropdown from './UserDropdown'

// ** Third Party Components
import { NavItem } from 'reactstrap'
import ModalComponent from '../../../components/modal-component'
import { useState } from 'react'
import PillsSkillPosition from '../../../components/tab-pills-skill-position'

const NavbarUser = () => {

  const [modalState, setModalState] = useState(false)
  const [tabActive, setTabActive] = useState("1")

  const toggleModal = (state = false) => {
    setModalState(state)
  }

  const toggleTab = (tab) => {
    setTabActive(tab)
  }

  return (
    <>
      <div className='bookmark-wrapper d-flex align-items-center'>
        <NavItem className='d-block'>
          <h3 className="text-primary" style={{ fontWeight: "900" }}>Sitenso</h3>
        </NavItem>
      </div>
      <ul className='nav navbar-nav align-items-center ml-auto'>
        <UserDropdown toggleModal={toggleModal} toggleTab={toggleTab} />
      </ul>
      <ModalComponent
        modalState={modalState}
        confirmFunct={() => setModalState(false)}
        closeFunct={() => setModalState(false)}
        showButtons={false}
      >
        <PillsSkillPosition activeTab={tabActive} toggleTab={toggleTab} />
      </ModalComponent>
    </>
  )
}
export default NavbarUser
