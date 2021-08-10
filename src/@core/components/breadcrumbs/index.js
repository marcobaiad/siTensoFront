// ** React Imports
import { Link } from 'react-router-dom'

// ** Third Party Components
import Proptypes from 'prop-types'
// import { Grid, CheckSquare, MessageSquare, Mail, Calendar } from 'react-feather'
import {
  Breadcrumb,
  BreadcrumbItem
} from 'reactstrap'

const BreadCrumbs = props => {
  // ** Props
  const { breadCrumbTitle, breadCrumbParent, breadCrumbParent2, breadCrumbParent3, breadCrumbActive } = props

  return (
    <div className='content-header row'>
      <div className='content-header-left col-md-9 col-12 mb-2'>
        <div className='row breadcrumbs-top'>
          <div className='col-12'>
            {breadCrumbTitle ? <h2 className='content-header-title float-left mb-0'>{breadCrumbTitle}</h2> : ''}
            <div className='breadcrumb-wrapper vs-breadcrumbs d-sm-block d-none col-12'>
              <Breadcrumb>
                <BreadcrumbItem tag='li'>
                  <Link to='/'>Inicio</Link>
                </BreadcrumbItem>
                {breadCrumbParent ? (
                  <BreadcrumbItem tag='li' className='text-primary'>
                    <Link to={breadCrumbParent?.to}>{breadCrumbParent?.label}</Link>
                  </BreadcrumbItem>
                ) : (null)
                }
                {breadCrumbParent2 ? (
                  <BreadcrumbItem tag='li' className='text-primary'>
                    <Link to={breadCrumbParent2?.to}>{breadCrumbParent2?.label}</Link>
                  </BreadcrumbItem>
                ) : (null)
                }
                {breadCrumbParent3 ? (
                  <BreadcrumbItem tag='li' className='text-primary'>
                    <Link to={breadCrumbParent3?.to}>{breadCrumbParent3?.label}</Link>
                  </BreadcrumbItem>
                ) : (null)
                }
                <BreadcrumbItem tag='li' active>
                  {breadCrumbActive?.label}
                </BreadcrumbItem>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default BreadCrumbs

// ** PropTypes
BreadCrumbs.propTypes = {
  // breadCrumbTitle: Proptypes.string.isRequired,
  // breadCrumbActive: Proptypes.string.isRequired
}
