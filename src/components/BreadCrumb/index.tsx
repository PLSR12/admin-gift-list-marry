import { Link, useLocation } from 'react-router-dom'
import { BreadcrumbStyled } from './styles'

const breadcrumbNameMap: any = {
  '/home': 'Home',
  '/category': 'Categoria',
}

const BreadCrumb = () => {
  const location = useLocation()
  const pathSnippets = location.pathname.split('/').filter((i) => i)

  const breadcrumbItems = pathSnippets.map((_, index) => {
    const url = `/${pathSnippets.slice(0, index + 1).join('/')}`
    return (
      <BreadcrumbStyled.Item key={url}>
        <Link to={url}>{breadcrumbNameMap[url]}</Link>
      </BreadcrumbStyled.Item>
    )
  })

  return <BreadcrumbStyled>{breadcrumbItems}</BreadcrumbStyled>
}

export default BreadCrumb
