import { Pagination, PaginationItem, PaginationLink } from 'reactstrap'
import "./paginationcomponent.scss"

function PaginationComponent(props) {

    const { currentPage, rowCount, rowsPerPage, onChangePage } = props
    const pages = Math.ceil(rowCount / rowsPerPage)

    return (
        <Pagination aria-label="Pagination Devs table">
            <PaginationItem disabled={currentPage < 2}>
                <PaginationLink
                    previous
                    href="#"
                    className="text-primary"
                    onClick={e => {
                        e.preventDefault()
                        if (currentPage > 1) {
                            onChangePage(currentPage - 1)
                        }
                    }} />
            </PaginationItem>
            {
                <PaginationItem active>
                    <PaginationLink href="#" onClick={e => e.preventDefault()}>
                        {currentPage}
                    </PaginationLink>
                </PaginationItem>
            }
            <PaginationItem>
                <PaginationLink
                    next
                    href="#"
                    className="text-primary"
                    active={"false"}
                    disabled={currentPage === pages}
                    onClick={e => {
                        e.preventDefault()
                        onChangePage(currentPage + 1)
                    }} />
            </PaginationItem>
        </Pagination >
    )
}

export default PaginationComponent