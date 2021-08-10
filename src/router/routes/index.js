import { lazy } from 'react'
import { isUserLoggedIn } from '../../utility/Utils'

// ** Document title
const TemplateTitle = '%s - Vuexy React Admin Template'

// ** Default Route
const DefaultRoute = '/devs/'

// ** Merge Routes
const Routes = [
  {
    path: '/devs/',
    component: lazy(() => import('../../views/Home'))
  },
  {
    path: '/agregar/',
    component: lazy(() => import('../../views/Form'))
  },
  {
    path: '/editar/',
    component: lazy(() => import('../../views/Form'))
  },
  {
    path: '/login/',
    component: lazy(() => import('../../views/Login')),
    layout: 'BlankLayout',
    meta: {
      authRoute: true
    }
  },
  {
    path: '/error/',
    component: lazy(() => import('../../views/Error')),
    layout: 'BlankLayout'
  }
]

export { DefaultRoute, TemplateTitle, Routes }
