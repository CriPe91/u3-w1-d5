import { Button, Col, Container, Dropdown, Row } from "react-bootstrap";
import { List } from "react-bootstrap-icons";
import { Grid } from "react-bootstrap-icons";
const UnderNav = () => (
  <>
    <Container fluid className="d-flex justify-content-between">
      <Row>
        <Col className="d-flex align-items-center">
          <h1 className="display-5 text-light mx-4">TV Shows</h1>
          <Dropdown>
            <Dropdown.Toggle variant="warning" id="dropdown-basic">
              Generi
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">Movies</Dropdown.Item>
              <Dropdown.Item href="#/action-2">Series</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Cartoon</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
      <Row>
        <Col className="d-flex align-items-center mx-4">
          <Button variant="dark" className="border border-radius-1 mx-2">
            <List />
          </Button>
          <Button variant="dark" className="border border-radius-1">
            <Grid />
          </Button>
        </Col>
      </Row>
    </Container>
  </>
);
export default UnderNav;
