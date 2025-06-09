import { Layout, Divider, Menu, Affix } from 'antd';
import HeroBanner from './components/./HeroBanner';
import Introduction from './components/Introduction';
import Utilities from './components/Utilities';
import MasterPlan from './components/MasterPlan';
import Pricing from './components/Pricing';
import Policies from './components/Policies';
import ContactForm from './components/ContactForm';
import MediaOverview from './components/MediaOverview';
import ReasonsToBuy from './components/ReasonsToBuy';
import Overview from './components/Overview';
import LocationInfo from './components/LocationInfo';
import InvestorInfo from './components/InvestorInfo';
import { useEffect } from 'react';
const { Header, Content, Footer } = Layout;

export default function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      event.preventDefault();
      const targetId = event.currentTarget.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 64,
          behavior: 'smooth',
        });
      }
    };

    const menuLinks = document.querySelectorAll('a[href^="#"]');
    menuLinks.forEach(link => {
      link.addEventListener('click', handleScroll);
    });

    return () => {
      menuLinks.forEach(link => {
        link.removeEventListener('click', handleScroll);
      });
    };
  }, []);

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Header style={{ backgroundColor: '#4CAF50', padding: '0 24px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <h1 style={{ fontSize: 28, color: '#fff', fontFamily: 'Arial, sans-serif', margin: 0 }}>Vinhomes Green City Long An</h1>
            <Menu mode="horizontal" defaultSelectedKeys={['overview']} style={{ backgroundColor: 'transparent', color: '#fff', fontWeight: 'bold' }}>
              <Menu.Item key="overview"><a href="#tongquan" style={{ color: '#fff' }}>TỔNG QUAN</a></Menu.Item>
              <Menu.Item key="utilities"><a href="#tienich" style={{ color: '#fff' }}>TIỆN ÍCH</a></Menu.Item>
              <Menu.Item key="masterplan"><a href="#matbang" style={{ color: '#fff' }}>MẶT BẰNG</a></Menu.Item>
              <Menu.Item key="investor"><a href="#chudautu" style={{ color: '#fff' }}>CHỦ ĐẦU TƯ</a></Menu.Item>
              <Menu.Item key="news"><a href="#news" style={{ color: '#fff' }}>TIN TỨC</a></Menu.Item>
              <Menu.Item key="contact"><a href="#lienhe" style={{ color: '#fff' }}>LIÊN HỆ</a></Menu.Item>
            </Menu>
          </div>
        </Header>
      </Affix>
      <Content>
        <HeroBanner />
        <Introduction />
        <MediaOverview />
        <Overview />
        <Divider />
        <LocationInfo />
        <Divider />
        <Utilities />
        <Divider />
        <MasterPlan />
        <ReasonsToBuy />
        <InvestorInfo />
        <MediaOverview />
        <Policies />
        <ContactForm />
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        ©2025 Vinhomes Green City | Designed by ChatGPT
      </Footer>
    </Layout>
  );
}
