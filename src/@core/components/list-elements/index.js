import React from 'react'
import { Row } from 'reactstrap'

function ListElement({ label, editFunct, deleteFunct }) {

    return (
        <Row className="mx-1 border rounded justify-content-between align-items-center mb-1">
            <p className="mb-0 pl-1">{label}</p>
            <Row className="mx-0">
                {/* <i className="far fa-edit text-primary" role="button" onClick={editFunct}></i> */}
                <i className="far fa-trash-alt text-danger mx-1" role="button" onClick={deleteFunct}></i>
            </Row>
        </Row>
    )
}

export default ListElement