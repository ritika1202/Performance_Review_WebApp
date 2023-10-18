import SideBar from "../../component/SideBar";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Layout({children, ...contentSpaceAttr}) {
    return (
        <Row className="m-auto">
            <Col md={2} className="p-0">
                <SideBar/>
            </Col>
            <Col md={10} {...contentSpaceAttr}>
                <main>
                    {children}
                </main>
            </Col>
        </Row>
    );
}

export default Layout;