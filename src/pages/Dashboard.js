import React, { useState } from "react";
import Row from "react-bootstrap/esm/Row";
import Layout from "./Layout/Layout";
import Container from "react-bootstrap/esm/Container";
import Col from "react-bootstrap/esm/Col";
import ProjectWiseChart from "../component/ProjectWiseChart.js";
import IndividualProjectChart from "../component/IndividualProjectChart.js";
import data from './Data.json';
import individual_data from './Dataset.json';

function Dashboard () {
    const [clickedLabel, setClickedLabel] = useState("");
     

    return (
        <Layout style={{ backgroundColor: "ghostwhite" }}>
            <Container>
                <Row className="project_header">Project Chart</Row>
                 <Row>
                    <Col md={12}>   
                         <Row><ProjectWiseChart data={data.chart.prj_chart} Onclick={(value) => setClickedLabel(value)}/></Row>
                        <Row> {clickedLabel.length > 0 ? <IndividualProjectChart individual_data={individual_data} clickedLabel={clickedLabel} Onclick={(value) => setClickedLabel(value)}/>  : ''}</Row>
                    </Col>
                </Row>
            </Container>
        </Layout>
    );
}

export default Dashboard;