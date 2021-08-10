import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import './modal-styles.scss'

function ModalComponent({ modalState = false, modalTitle = "", children, confirmFunct, closeFunct, showButtons = true }) {
    return (
        <>
            <Modal isOpen={modalState} toggle={closeFunct} size="lg">
                {!!modalTitle && <ModalHeader toggle={closeFunct}>{modalTitle}</ModalHeader>}
                <ModalBody>
                    {children}
                </ModalBody>
                {
                    showButtons && <ModalFooter>
                        <Button color="primary" onClick={confirmFunct}>Confirmar</Button>{' '}
                        <Button color="secondary" onClick={closeFunct}>Cancelar</Button>
                    </ModalFooter>
                }
            </Modal>
        </>
    )
}

export default ModalComponent