import { Col, Row } from "antd";
import "../assets/styles/Information.scss";
import About from "./About";

const Information = () => {
    return(
        <div className="Information">
            <Row justify="space-around">
                <Col offset={1} span={22} className="col-off">
                    <About />
                </Col>
            </Row>
        </div>
    )
}

export default Information;