import React from "react";
import { Row, Col, Card, Button, Image, Container } from "react-bootstrap";
import styles from "./Style.module.css";
import Skills from "./Skills";
export default function Into() {
  return (
    <>
      <Row
        className={` justify-content-center  ${styles.clear} ${styles.bgImage}`}
      >
        <Col className={` mx-auto my-auto`} sm={8} md={8}>
          <Card.Body>
            <Card.Title className={`${styles.quote} ${styles.textJustify}`}>
              "Success is not final; failure is not fatal:
              <br className={`${styles.hide}`} /> It is the courage to continue
              that counts."
            </Card.Title>
          </Card.Body>
        </Col>
      </Row>
      <Container className={` mt-5 `}>
        <Row className={`  ${styles.clear} `}>
          <Col sm={12} md={5}>
            <Image
              className={` mt-5 ${styles.profileImage}`}
              variant="top"
              src="eriseldBgTransparent2.png"
              roundedCircle
            />
            <Card.Body>
              <Card.Title className={`${styles.title}`}>
                Eriseld Kosta
              </Card.Title>
              <Card.Title className={`${styles.subTitle}`}>
                Full Stack Developer
              </Card.Title>
            </Card.Body>
          </Col>
          <Col className={` my-auto `} sm={12} md={7}>
            <Card.Text
              className={` mb-5 ${styles.subTitle} ${styles.textJustify}`}
            >
              Hello I'm Eriseld, a <u>Full Stack Web Developer</u> with a
              passion for building professional web applications. I believe that
              integrity and dedication are key values for being successful at
              work, and I uphold those values every day.
            </Card.Text>
            <Button className={` ${styles.myButton}`} variant="primary">
              Contact Me
            </Button>
          </Col>
        </Row>{" "}
      </Container>
      <Row className={` mt-5  ${styles.clear} ${styles.bgBlack} `}>
        <Col className={` mt-5  my-auto mx-auto `} sm={11}>
          <Row
            className={` mt-5 mb-3 justify-content-center  ${styles.clear}  `}
          >
            <Col sm={11}>
              {" "}
              <h3 className={` text-left ${styles.mediumTitleW}`}>
                Educational History
              </h3>
            </Col>
          </Row>
          <Col sm={12} md={12}>
            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./strive.png"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={10} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Full Stack Web Developer
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Strive School | Apr 2020 - Oct 2020
                </Card.Text>

                <Card.Text className={`  mb-2 text-left ${styles.text}  `}>
                  Strive School is a YCombinator company on a mission to train
                  the next generation of software engineers in Europe. During
                  last 6-months I have build different web-apps using React Js,
                  MongoDb, Node.js, JavaScript, Bootstrap, TypeScript, Postgree
                  SQL and Express.js.
                </Card.Text>
              </Col>
            </Row>
            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./uamd.png"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={10} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Master's in Computer Science
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Aleksander Moisiu University | Oct 2018 - Oct 2019
                </Card.Text>
                <Card.Title
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Subjects:
                </Card.Title>

                <Card.Text className={`  mb-2 text-left ${styles.text} `}>
                  Cryptography, Advanced web programming , Data mining, Mobile
                  Programing, Project Management, Parallel Programming, Coding
                  Theory, Advanced SW Engineering.
                </Card.Text>
              </Col>
            </Row>

            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./uamd.png"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={10} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Bachelor Information Technology
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Aleksander Moisiu University | Dec 2013 - Dec 2017
                </Card.Text>
                <Card.Title
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Subjects:
                </Card.Title>

                <Card.Text className={`  mb-2 text-left ${styles.text} `}>
                  Database, Telecommunication, Computer Architecture, Digital
                  Systems, Computer Network, Java, Html/Css, C++.
                </Card.Text>
              </Col>
            </Row>
          </Col>{" "}
          {/* second education */}
        </Col>
      </Row>
      <Col sm={12} md={5}></Col>
      {/* end of educational history */}
      <Row className={` mt-5  ${styles.clear}  `}>
        <Col className={` mt-5  my-auto mx-auto `} sm={11}>
          <Row className={`  mb-3 justify-content-center  ${styles.clear}  `}>
            <Col sm={11}>
              {" "}
              <h3 className={` text-left ${styles.mediumTitleW}`}>
                Work History
              </h3>
            </Col>
          </Row>
          <Col sm={12} md={12}>
            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./freelance.jpg"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={9} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Digital Marketer(Part Time)
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Freelancer | Oct 2017 - present
                </Card.Text>

                <Card.Text className={`  mb-2 text-left ${styles.text}  `}>
                  Working as a digital marketer in freelance platforms. Main
                  Projects: Wix website designer, WordPress web development,
                  social media manager and advertising.
                </Card.Text>
              </Col>
            </Row>
            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./intech.png"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={9} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Frontend developer
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  InTech | Jun 2019 - Oct 2019
                </Card.Text>

                <Card.Text className={`  mb-2 text-left ${styles.text}  `}>
                  Working as a frontend developer, creating mockups and websites
                  for company clients using mostly Html, Css, Javascript and
                  WordPress.
                </Card.Text>
              </Col>
            </Row>
            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./maccaferri.png"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={9} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Production Manager
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Maccaferri Balkans | Sep 2017 - Jan 2019
                </Card.Text>

                <Card.Text className={`  mb-2 text-left ${styles.text}  `}>
                  Supervisor of a team of 5, creating and checking the quality
                  of gabions and other top products of the company.
                </Card.Text>
              </Col>
            </Row>
          </Col>{" "}
          {/* second education */}
        </Col>

        <Row className={` mt-5  ${styles.clear} ${styles.bgBlack} `}>
          <Col className={` mt-5  my-auto mx-auto `} sm={12}>
            <Row
              className={` mt-5 mb-3 justify-content-center  ${styles.clear}  `}
            >
              <Col sm={12}>
                {" "}
                <h3 className={` text-center mb-4 ${styles.mediumTitleW}`}>
                  My Skills
                </h3>
              </Col>
            </Row>
            <Row className={` mb-5  mb-5 ${styles.clear} ${styles.bgBlack}  `}>
              {" "}
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills title="React" img="./react.png" description="hello" />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills
                  title="Node.js"
                  img="./nodejs.png"
                  description="hello"
                />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills
                  title="MongoDB"
                  img="./mongodb.png"
                  description="hello"
                />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills
                  title="Express.js"
                  img="./express.png"
                  description="hello"
                />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills
                  title="Bootstrap"
                  img="./bootstrap.png"
                  description="hello"
                />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills title="Html" img="./html.png" description="hello" />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills title="CSS" img="./css.png" description="hello" />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills title="Typescript" img="./ts.png" description="hello" />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills title="Javascript" img="./js.jpg" description="hello" />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills
                  title="PostgreSQL"
                  img="./postgree.png"
                  description="hello"
                />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills
                  title="WordPress"
                  img="./wordpress.png"
                  description="hello"
                />
              </Col>
              <Col xs={6} sm={6} md={6} lg={3}>
                {" "}
                <Skills title="Photoshop" img="./js.jpg" description="hello" />
              </Col>
            </Row>
          </Col>{" "}
          {/* second education */}
        </Row>

        <Col sm={12} md={5}></Col>
      </Row>
      {/* end of educational history */}
      <Row className={` mt-5  ${styles.clear}  `}>
        <Col className={` mt-5  my-auto mx-auto `} sm={11}>
          <Row className={`  mb-3 justify-content-center  ${styles.clear}  `}>
            <Col sm={11}>
              {" "}
              <h3 className={` text-left ${styles.mediumTitleW}`}>
                My Projects
              </h3>
            </Col>
          </Row>
          <Col sm={12} md={12}>
            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./freelance.jpg"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={10} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Digital Marketer(Part Time)
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Freelancer | Oct 2017 - present
                </Card.Text>

                <Card.Text className={`  mb-2 text-left ${styles.text}  `}>
                  Working as a digital marketer in freelance platforms, Main
                  Projects: Wix website designer, WordPress web developers,
                  social media manager and advertising.
                </Card.Text>
              </Col>
            </Row>
            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./intech.png"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={10} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Frontend developer
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  InTech | Jun 2019 - Oct 2019
                </Card.Text>

                <Card.Text className={`  mb-2 text-left ${styles.text}  `}>
                  Working as a frontend developer, creating mockups and websites
                  mostly with Html, Css and WordPress.
                </Card.Text>
              </Col>
            </Row>
            <Row className={` ${styles.clear} `}>
              {" "}
              <Col xs={3} md={2}>
                {" "}
                <Image
                  variant="top"
                  className={`${styles.educationPhoto} `}
                  src="./maccaferri.png"
                  roundedCircle
                />{" "}
              </Col>
              <Col xs={9} md={10} className={` mt-2 mb-5 `}>
                <Card.Title
                  className={`  mb-2  text-left ${styles.mediumTitle} `}
                >
                  Production Manager
                </Card.Title>
                <Card.Text
                  className={`  mb-2 text-left ${styles.mediumSubTitle} `}
                >
                  Maccaferri Balkans | Sep 2017 - Jan 2019
                </Card.Text>

                <Card.Text className={`  mb-2 text-left ${styles.text}  `}>
                  Supervisor of a team of 5, creating and checking the quality
                  of gabions and other top products of the company.
                </Card.Text>
              </Col>
            </Row>
          </Col>{" "}
          {/* second education */}
        </Col>
        {/* end of educational history */}
      </Row>
    </>
  );
}
