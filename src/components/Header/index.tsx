import { type ReactElement } from 'react'
import {
  BreadCrumbContainer,
  HeaderContainer,
  Image,
  ProfileContainer,
  Text,
  TextStrong,
  UserInfo,
} from './styles'
import { Avatar, Space } from 'antd'
import { IoPersonSharp } from 'react-icons/io5'
import BreadCrumb from '../BreadCrumb'

export default function Header(): ReactElement {
  return (
    <HeaderContainer>
      <BreadCrumbContainer>
        <BreadCrumb />
      </BreadCrumbContainer>

      <ProfileContainer>
        <Space size="small">
          <Avatar src={<IoPersonSharp size={24} color={'white'} />} />
          <UserInfo>
            <Text>Bem-vindo(a)</Text>
            <TextStrong>Admin</TextStrong>
          </UserInfo>
        </Space>
      </ProfileContainer>

      {/* <Image preview={false} src={ZampOfficeLogo} /> */}
    </HeaderContainer>
  )
}
