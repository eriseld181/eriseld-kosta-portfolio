import React from "react";
import { Row, Col, Card, Button, Image, Container } from "react-bootstrap";
import styles from "./Style.module.css";
export default function Skills({ title, description }) {
  return (
    <Container>
      <Card className={`${styles.clear} mt-3 mb-2 text-center`}>
        <Card.Img
          className={`${styles.bg} mx-auto ${styles.imageContent} `}
          variant="top"
          src="./freelance.jpg"
        />
        <Card.Body className={`${styles.bg} `}>
          <Card.Title className={`${styles.label} mt-3 text-left`}>
            {title}
          </Card.Title>
          <Card.Text className={`${styles.text} ${styles.textJustify}  `}>
            {description}
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
}
