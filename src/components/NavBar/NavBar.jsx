import { Camera, Mic, Wifi, User, Bell } from 'components/Icons';
import { NavLink } from 'react-router-dom';
import {
  NavBarContainer,
  NavLinksContainer,
  NavLinkItem,
  ServicesContainer,
  ServiceItem,
  ServiceIcon,
  ServiceName,
  ServiceStatus,
  ServiceInfo,
  NavProfileArea,
  UserInfo,
  UserName,
  WelcomeMessage,
  UserIcon,
} from './NavBar.styles';

const NavBar = () => {
  return (
    <NavBarContainer>
      <ServicesContainer>
        <ServiceItem>
          <ServiceInfo>
            <ServiceName>سرعة الأنترنت </ServiceName>
            <ServiceStatus>٣٦ Mbps</ServiceStatus>
          </ServiceInfo>
          <ServiceIcon className='wifi'>
            <Wifi />
          </ServiceIcon>
        </ServiceItem>

        <ServiceItem>
          <ServiceInfo>
            <ServiceName>تجربة الكاميرا </ServiceName>
            <ServiceStatus>لم تقم باختبارها</ServiceStatus>
          </ServiceInfo>
          <ServiceIcon className='camera'>
            <Camera />
          </ServiceIcon>
        </ServiceItem>

        <ServiceItem>
          <ServiceInfo>
            <ServiceName>تجربة الصوت </ServiceName>
            <ServiceStatus>جيد جدآ</ServiceStatus>
          </ServiceInfo>
          <ServiceIcon className='mic'>
            <Mic />
          </ServiceIcon>
        </ServiceItem>
      </ServicesContainer>

      <NavLinksContainer>
        <NavLinkItem>
          <NavLink exact activeClassName='active' to='/'>
            نبذه عن هند
          </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to='/shop'>متجر</NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to='/broadcast'>برودكاست </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to='/courses'>كورسات </NavLink>
        </NavLinkItem>
        <NavLinkItem>
          <NavLink to='/book'>حجز عيادة (20 دينار كويتي) </NavLink>
        </NavLinkItem>
      </NavLinksContainer>

      <NavProfileArea>
        <UserInfo>
          <UserName>مالك محمد</UserName>
          <WelcomeMessage>مرحبآ بك</WelcomeMessage>
        </UserInfo>
        <UserIcon>
          <User />
        </UserIcon>
        <Bell />
      </NavProfileArea>
    </NavBarContainer>
  );
};

export default NavBar;
