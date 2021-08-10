import React from 'react'
import { FormGroup, Input, Label, Row, Spinner } from 'reactstrap'

function SelectInput(props) {
    const { labelText = "", inputID = "", inputName = "", children = {}, onchange } = props

    return (
        <FormGroup>
            {!!labelText && <Label for={inputID}>{labelText}</Label>}
            {
                children?.[1]?.length > 0 ? <Input type="select" onChange={onchange} name={inputName} id={inputID}>
                    {children}
                </Input> : <Row>
                    <Spinner className="m-1" color="primary" />
                </Row>
            }
        </FormGroup>
    )
}

export default SelectInput