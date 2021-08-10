import { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { useDispatch, useSelector } from 'react-redux'
import { Row } from 'reactstrap'
import Spinner from 'reactstrap/lib/Spinner'
import { clientAxios } from '../../../configs/axiosConfig'
import { handleSetDevs } from '../../../redux/actions/devs'
import DropdownActions from './DropdownActions'
import PaginationComponent from '../pagination'


const DataTableComponent = () => {

    const dispatch = useDispatch()
    const devs = useSelector(state => state.devs.devs)
    const [loadingTable, setLoadingTable] = useState(false)

    const columns = [
        {
            name: 'Nombre',
            selector: 'developerName',
            sortable: true
        },
        {
            name: 'Profesión',
            selector: 'occupation',
            sortable: true,
            center: true
        },
        {
            name: 'Posición',
            selector: 'position',
            sortable: true,
            center: true
        },
        {
            name: 'Tecnología',
            selector: 'skill',
            sortable: true,
            center: true
        },
        {
            name: 'Acción',
            cell: row => <DropdownActions row={row} />,
            sortable: true,
            center: true
        }
    ]

    useEffect(() => {
        (async () => {
            if (devs.length === 0) {
                setLoadingTable(true)
                try {
                    const { data } = await clientAxios.get("/developers")
                    const { result = [] } = data
                    dispatch(handleSetDevs(result))
                    setLoadingTable(false)
                } catch (error) {
                    setLoadingTable(false)
                    console.log(error)
                }
            }
        })()
    }, [])


    return (
        <DataTable
            progressPending={loadingTable}
            progressComponent={<Spinner color="primary" />}
            noHeader={true}
            columns={columns}
            data={devs}
            pagination
            paginationPerPage={3}
            noDataComponent="No hay registros"
            customStyles={{
                headRow: {
                    style: {
                        backgroundColor: "#f2f2f6",
                        color: "#5f5872"
                    }
                }
            }}
            paginationComponentOptions={{
                rowsPerPageText: 'Filas por Página:',
                rangeSeparatorText: 'de',
                noRowsPerPage: false,
                selectAllRowsItem: true,
                selectAllRowsItemText: 'Todo'
            }}
            paginationComponent={pagination => <Row className="justify-content-between align-items-center mx-0">
                <>
                    <p className="mb-0">Mostrando {pagination.currentPage} de {Math.ceil(pagination.rowCount / pagination.rowsPerPage)} Entradas</p>
                </>
                <PaginationComponent {...pagination} />
            </Row>}
        />
    )
}

export default DataTableComponent