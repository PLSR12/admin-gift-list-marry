import { type ReactElement, useState } from 'react'
import { type MenuProps } from 'antd'
import {
  SidebarContainer,
  MenuContainer,
  MenuArea,
  MenuAreaCollapsed,
} from './styles'
import { MdMenu, MdHome, MdCategory } from 'react-icons/md'
import { useLocation, useNavigate } from 'react-router-dom'
import NAVIGATION_CONSTANTS from '@/constants/navigation'

type MenuItem = Required<MenuProps>['items'][number]

export function Sidebar(): ReactElement {
  const location = useLocation()
  const navigate = useNavigate()
  const defaultConfigCollapse: any = localStorage.getItem(
    'Config:SideMenuCollapsed'
  )
  const [collapsed, setCollapsed] = useState<boolean>(
    JSON.parse(defaultConfigCollapse) || false
  )

  const items: MenuItem[] = [
    {
      label: 'Home',
      key: '1',
      icon: <MdHome />,
    },
    {
      label: 'Categorias',
      key: '2',
      icon: <MdCategory />,
    },
  ]

  const getSelectedKeys = (pathname: string): string[] => {
    if (pathname === NAVIGATION_CONSTANTS.HOME_APP) {
      return ['1']
    }

    return []
  }
  const selectedKeys = getSelectedKeys(location.pathname)

  const handleCollapse = (value: boolean) => {
    setCollapsed(value)
    localStorage.setItem('Config:SideMenuCollapsed', JSON.stringify(value))
  }

  return (
    <SidebarContainer width={230} collapsedWidth={80} collapsed={collapsed}>
      {collapsed ? (
        <MenuAreaCollapsed
          onClick={() => {
            handleCollapse(!collapsed)
          }}
        >
          <MdMenu size={35} />
        </MenuAreaCollapsed>
      ) : (
        <MenuArea
          onClick={() => {
            handleCollapse(!collapsed)
          }}
        >
          <MdMenu size={35} />
          <span>Menu</span>
        </MenuArea>
      )}
      <MenuContainer
        selectedKeys={selectedKeys}
        mode="vertical"
        items={items}
      />
    </SidebarContainer>
  )
}
