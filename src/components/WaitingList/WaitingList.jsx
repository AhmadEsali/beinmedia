import {
  ActiveUser,
  InActiveUser,
  Facebook,
  Twitter,
  Instagram,
} from 'components/Icons';
import {
  WaitingListContainer,
  WaitingListTitle,
  WaitingListUsers,
  WaitingListUser,
  WaitingListUserIcon,
  WaitingListUserInfo,
  WaitingListUserDate,
  WaitingListUserName,
  WaitingListActiveUser,
  CopyRight,
  CopyRightText,
  SocialIcons,
} from './WaitingList.styles';

const WaitingList = () => {
  return (
    <WaitingListContainer>
      <WaitingListTitle>١٤ قائمة الأنتظار </WaitingListTitle>
      <WaitingListUsers>
        <WaitingListUser>
          <WaitingListUserInfo>
            <WaitingListUserDate>منذ ١٢ دقيقة</WaitingListUserDate>
            <WaitingListUserName>مستخدم 1</WaitingListUserName>
          </WaitingListUserInfo>
          <WaitingListUserIcon>
            <InActiveUser color='#B7C8D8' />
          </WaitingListUserIcon>
        </WaitingListUser>
        <WaitingListUser>
          <WaitingListUserInfo>
            <WaitingListUserDate>منذ ١٢ دقيقة</WaitingListUserDate>
            <WaitingListUserName>مستخدم 2</WaitingListUserName>
          </WaitingListUserInfo>
          <WaitingListUserIcon>
            <InActiveUser color='#B7C8D8' />
          </WaitingListUserIcon>
        </WaitingListUser>

        <WaitingListActiveUser>
          <WaitingListUserInfo>
            <WaitingListUserDate>منذ ١٠ دقيقة</WaitingListUserDate>
            <WaitingListUserName>مالك محمد</WaitingListUserName>
          </WaitingListUserInfo>
          <WaitingListUserIcon>
            <ActiveUser color='#FF671B' />
          </WaitingListUserIcon>
        </WaitingListActiveUser>
        <WaitingListUser>
          <WaitingListUserInfo>
            <WaitingListUserDate>منذ ١٢ دقيقة</WaitingListUserDate>
            <WaitingListUserName>مستخدم 3</WaitingListUserName>
          </WaitingListUserInfo>
          <WaitingListUserIcon>
            <InActiveUser color='#B7C8D8' />
          </WaitingListUserIcon>
        </WaitingListUser>
        <WaitingListUser>
          <WaitingListUserInfo>
            <WaitingListUserDate>منذ ١٢ دقيقة</WaitingListUserDate>
            <WaitingListUserName>مستخدم 4</WaitingListUserName>
          </WaitingListUserInfo>
          <WaitingListUserIcon>
            <InActiveUser color='#B7C8D8' />
          </WaitingListUserIcon>
        </WaitingListUser>
        <WaitingListUser>
          <WaitingListUserInfo>
            <WaitingListUserDate>منذ ١٢ دقيقة</WaitingListUserDate>
            <WaitingListUserName>مستخدم 5</WaitingListUserName>
          </WaitingListUserInfo>
          <WaitingListUserIcon>
            <InActiveUser color='#B7C8D8' />
          </WaitingListUserIcon>
        </WaitingListUser>
        <WaitingListUser>
          <WaitingListUserInfo>
            <WaitingListUserDate>منذ ١٢ دقيقة</WaitingListUserDate>
            <WaitingListUserName>مستخدم 6</WaitingListUserName>
          </WaitingListUserInfo>
          <WaitingListUserIcon>
            <InActiveUser color='#B7C8D8' />
          </WaitingListUserIcon>
        </WaitingListUser>
      </WaitingListUsers>

      <CopyRight>
        <CopyRightText>
          <h1>جميع الحقوق محفوظة</h1>
          <h1>تايم فيوير © ٢٠١٣ - ٢٠٢٠</h1>
        </CopyRightText>
        <SocialIcons>
          <Facebook />
          <Twitter />
          <Instagram />
        </SocialIcons>
      </CopyRight>
    </WaitingListContainer>
  );
};

export default WaitingList;
