import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { Card, CardHeader, CardBody, CardTitle } from 'reactstrap'
import Button from 'reactstrap/lib/Button'
import Breadcrumbs from '../@core/components/breadcrumbs'
import DataTableComponent from '../@core/components/react-data-bale'
import { handleChangeDev } from '../redux/actions/devs'

const Home = () => {

  const history = useHistory()
  const dispatch = useDispatch()

  return (
    <>
      <Breadcrumbs breadCrumbActive={{ label: "Desarrolladores" }} />
      <Card>
        <CardHeader className="border-bottom mb-3">
          <CardTitle>Tabla de Desarrolladores</CardTitle>
          <Button color="primary" onClick={e => {
            e.preventDefault()
            history.push("/agregar")
            dispatch(handleChangeDev({}))
          }}>+ Agregar</Button>
        </CardHeader>
        <CardBody>
          <DataTableComponent />
        </CardBody>
      </Card>
    </>
  )
}

export default Home
