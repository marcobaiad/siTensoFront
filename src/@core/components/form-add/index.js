import React from 'react'
import { Col, Form, FormGroup, Input, Label, Row, Button } from 'reactstrap'

function FormAdd({ onsubmitFunct, placeholderText = "Posición", inputName = "", onchangeFunct, inputValue = "" }) {

    return (
        <Form onSubmit={onsubmitFunct}>
            <Row form className=" mx-0 w-100 justify-content-between align-items-center">
                <Col md={6}>
                    <FormGroup>
                        <Label for={`formInput ${inputName}`} className="font-weight-bold">{placeholderText}</Label>
                        <Input name={inputName} value={inputValue} id={`formInput ${inputName}`} placeholder={`Ingresar ${placeholderText}`} onChange={onchangeFunct} bsSize="sm" />
                    </FormGroup>
                </Col>
                <Col md={6}>
                    <Button color="primary" size="sm" className="mt-1">Enviar</Button>
                </Col>
            </Row>
        </Form>
    )
}

export default FormAdd