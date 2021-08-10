import React from 'react'
import { useHistory } from 'react-router-dom'
import { Card, CardBody, CardTitle } from 'reactstrap'
import CardHeader from 'reactstrap/lib/CardHeader'
import BreadCrumbs from '../@core/components/breadcrumbs'
import FormDev from '../@core/components/form-dev'

function Form() {

    const history = useHistory()

    return (
        <>
            <BreadCrumbs breadCrumbActive={{ label: history.location.pathname.split("/").pop() }} breadCrumbParent={{ label: "Desarrolladores", to: "/devs" }} />
            <Card>
                <CardHeader className="border-bottom mb-3">
                    <CardTitle>Agregar Desarrollador</CardTitle>
                </CardHeader>
                <CardBody>
                    <FormDev />
                </CardBody>
            </Card>
        </>
    )
}

export default Form