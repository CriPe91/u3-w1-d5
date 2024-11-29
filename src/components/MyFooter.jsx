import { Col, Row,Button,Footer } from "react-bootstrap"
import { Facebook} from "react-bootstrap-icons"
import { Instagram } from "react-bootstrap-icons"
import { Twitter } from "react-bootstrap-icons"
import { Youtube } from "react-bootstrap-icons"
const MyFooter =()=>(
    return(
        <>
        
          <Footer>
          <Row className="justify-content-center mt-5">
            <Col className="col col-6">
              <Row className="row">
                <Col className="col mb-2">
                  <Facebook/>
                  <Instagram/>
                  <Twitter/>
                  <Youtube/>
                </Col>
              </Row>
              <Row
                className="row-cols-1 row-cols-sm-2 row-cols-md-4 row-cols-lg 4"
              >
                <Col className="col">
                  <Row class="row">
                    <Col className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">Audio and Subtitles</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Media Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Privacy</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Contact us</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col className="col">
                  <Row className="row">
                    <Col className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">Audio Description</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Investor Relations</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Legal Notices</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col className="col">
                  <Row className="row">
                    <Col className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">Help Center</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Jobs</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Cookie Preferences</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
                <Col className="col">
                  <Row className="row">
                    <Col className="col footer-links">
                      <p>
                        <a href="#" alt="footer link">Gift Cards</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Terms of Use</a>
                      </p>
                      <p>
                        <a href="#" alt="footer link">Corporate Information</a>
                      </p>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row clasNameNames="row">
                <Col className="col mb-2">
                  <Button
                    type="button"
                    className="btn btn-sm footer-button rounded-0 mt-3"
                  >
                    Service Code
                  </Button>
                </Col>
              </Row>
              <Row className="row">
                <Col className="col mb-2 mt-2 copyright">
                  Â© 1997-2023 Netflix, Inc.
                </Col>
              </Row>
            </Col>
          </Row>
        </Footer>
        
        </>
    )
)
export default MyFooter;
