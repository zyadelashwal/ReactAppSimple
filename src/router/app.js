import { lazy } from 'react'



export const routes = [   
  { path:"/", Component: lazy(() => import('../Pages/Products')) },
 
]

export default routes
