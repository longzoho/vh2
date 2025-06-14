import { Layout, Divider, Menu, Affix, Row, Col } from 'antd';
import HeroBanner from './components/./HeroBanner';
import Introduction from './components/Introduction';
import Utilities from './components/Utilities';
import MasterPlan from './components/MasterPlan';
import Policies from './components/Policies';
import ContactForm from './components/ContactForm';
import MediaOverview from './components/MediaOverview';
import ReasonsToBuy from './components/ReasonsToBuy';
import Overview from './components/Overview';
import LocationInfo from './components/LocationInfo';
import InvestorInfo from './components/InvestorInfo';
import Exclusive from './components/Exclusive';
import Title from './components/custom/Title';
import SandTable from "./components/SandTable";
import PriceTable from './components/PriceTable';

const { Header, Content, Footer } = Layout;

export default function App() {
  const handleScroll = (e, id) => {
    e.preventDefault();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      const y = targetElement.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  return (
    <Layout>
      <Affix offsetTop={0}>
        <Header style={{
          backgroundColor: '#196352',
          padding: '0 24px',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)',
          height: 80,
          overflowX: 'auto'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
              <img src="/logo.png" alt="Logo" style={{ height: 80, padding: 5 }}/>
              <h1 style={{ fontSize: 24, color: '#fff', fontFamily: 'Arial, sans-serif', margin: 0 }}>Vinhomes Green
                City Tây Bắc</h1>
            </div>
            <div style={{ overflowX: 'auto', whiteSpace: 'nowrap', marginLeft: 'auto' }}>
              <Menu mode="horizontal" defaultSelectedKeys={['overview']}
                    style={{ backgroundColor: 'transparent', color: '#fff', fontWeight: 'bold', minWidth: 700 }}>
                <Menu.Item key="overview">
                  <a href="#tongquan" onClick={(e) => handleScroll(e, 'tongquan')} style={{ color: '#fff' }}>
                    TỔNG QUAN
                  </a>
                </Menu.Item>
                <Menu.Item key="utilities">
                  <a href="#tienich" onClick={(e) => handleScroll(e, 'tienich')} style={{ color: '#fff' }}>
                    TIỆN ÍCH
                  </a>
                </Menu.Item>
                <Menu.Item key="masterplan">
                  <a href="#matbang" onClick={(e) => handleScroll(e, 'matbang')} style={{ color: '#fff' }}>
                    MẶT BẰNG
                  </a>
                </Menu.Item>
                <Menu.Item key="investor">
                  <a href="#chu-dau-tu" onClick={(e) => handleScroll(e, 'chu-dau-tu')} style={{ color: '#fff' }}>
                    CHỦ ĐẦU TƯ
                  </a>
                </Menu.Item>
                <Menu.Item key="exclusive">
                  <a href="#daily" onClick={(e) => handleScroll(e, 'daily')} style={{ color: '#fff' }}>
                    ĐẠI LÝ
                  </a>
                </Menu.Item>
                {/* <Menu.Item key="news">
                  <a href="#news" onClick={(e) => handleScroll(e, 'news')} style={{ color: '#fff' }}>
                    TIN TỨC
                  </a>
                </Menu.Item> */}
                <Menu.Item key="contact">
                  <a href="#lienhe" onClick={(e) => handleScroll(e, 'lienhe')} style={{ color: '#fff' }}>
                    LIÊN HỆ
                  </a>
                </Menu.Item>
              </Menu>
            </div>
          </div>
        </Header>
      </Affix>
      <Content>
        <HeroBanner/>
        <Introduction/>
        <MediaOverview/>
        <Overview/>
        <Divider/>
        <LocationInfo/>
        <SandTable/>
        <PriceTable/>
        <Divider/>
        <Utilities/>
        <Divider/>
        <MasterPlan/>
        <ReasonsToBuy/>
        <InvestorInfo/>
        <Exclusive/>
        <Policies/>
        <ContactForm/>
      </Content>
      <Footer style={{ backgroundColor: "#196352", padding: "50px 0", color: "#fff" }}>
        <section style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px' }}>
          <Row gutter={[32, 32]}>

            <Col xs={24} md={6} style={{ textAlign: 'center' }}>
              <img src="/logo.png" alt="Việt Phúc Holdings" style={{ width: '100px', marginBottom: 16 }}/>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: '#fff' }}>
                Việt Phúc Holdings được thành lập bởi đội ngũ lãnh đạo trẻ, năng động dựa trên nguồn cảm hứng, khát vọng
                cung cấp các sản phẩm, dịch vụ bất động sản chất lượng, an toàn, cam kết khả năng sinh lời vượt trội.
              </p>
            </Col>
            <Col xs={24} md={8}>
              <Title level={3} style={{ color: '#fff' }}>THÔNG TIN LIÊN HỆ</Title>
              <p>Trụ sở chính: Số 65, đường 12, KDC CityLand Park Hills, Phường 10, Gò Vấp, TPHCM</p>
              <p>Văn phòng kinh doanh: Số 2A, đường Nguyễn Sỹ Sách, Phường 15, Tân Bình, TPHCM</p>
              <p>Email: vietphucholdings@gmail.com</p>
              <p>Hotline: 0856.744.999</p>
              <p>Website: www.vietphucholdings.com</p>
            </Col>
            <Col xs={24} md={5}>
              <Title level={3} style={{ color: '#fff' }}>THEO DÕI TRÊN</Title>
              <div style={{ marginBottom: 16 }}>
                <iframe
                  title="Facebook Page"
                  src="https://www.facebook.com/plugins/page.php?href=https://www.facebook.com/vietphucholdings&tabs=timeline&width=250&height=130&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true"
                  width="250"
                  height="130"
                  style={{ border: 'none', overflow: 'hidden' }}
                  scrolling="no"
                  frameBorder="0"
                  allow="encrypted-media"
                ></iframe>
              </div>
              <div style={{ fontSize: 24 }}>
                <a href="https://www.facebook.com/vietphucholdings" target="_blank" rel="noopener noreferrer"
                   style={{ marginRight: 12, color: 'white' }}><i className="fab fa-facebook-f"/></a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"
                   style={{ marginRight: 12, color: 'white' }}><i className="fab fa-instagram"/></a>
                <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"
                   style={{ marginRight: 12, color: 'white' }}><i className="fab fa-twitter"/></a>
                <a href="mailto:vietphucholdings@gmail.com" target="_blank" rel="noopener noreferrer"
                   style={{ color: 'white' }}><i className="fas fa-envelope"/></a>
              </div>
            </Col>
          </Row>
          <div style={{ textAlign: 'center', borderTop: '1px solid #ccc', marginTop: 32, paddingTop: 16 }}>
            © {new Date().getFullYear()} VIỆT PHÚC HOLDINGS
          </div>
        </section>
      </Footer>
    </Layout>
  );
}
