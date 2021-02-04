import { Camera, Mic, Wifi } from 'components/Icons';
import { NavLink } from 'react-router-dom';
import { AboutUsInfoContainer, AboutUsText } from './AboutUsInfo.styles';

const AboutUsInfo = () => {
  return (
    <AboutUsInfoContainer>
      <AboutUsText>
        هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني لمكتب وكيل
        وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات المختصة في
        مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال التواصل
        الاجتماعي.هند الناهض مستشارة إعلام رقمي, مستشارة الإعلام الإلكتروني
        لمكتب وكيل وزارة الإعلام الكويتية وهي المؤسسة لشركة “سوشالوبي” للخدمات
        المختصة في مجال الإعلام الإجتماعي , بالإضافة الى إنها مستشارة في مجال
        التواصل الاجتماعي.
      </AboutUsText>
    </AboutUsInfoContainer>
  );
};

export default AboutUsInfo;
