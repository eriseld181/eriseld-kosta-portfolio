import React from "react";
import { Row, Col, Card, Button, Image, Container } from "react-bootstrap";
import styles from "./Style.module.css";
export default function Skills({ title, description, img }) {
  return (
    <Container className={`mb-4 mt-4  `}>
      <Image
        className={` mx-auto ${styles.educationPhoto} `}
        variant="top"
        roundedCircle
        src={img}
      />

      <h4 className={` mt-3 text-center ${styles.iconTitle}`}>{title}</h4>
    </Container>
  );
}
