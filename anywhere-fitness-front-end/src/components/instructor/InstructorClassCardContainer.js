import React, { useState } from "react";
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";
import InstructorClassCard from "./InstructorClassCard";
import InstructorsAddClassWFormik from "./InstructorAddClass";

function InstructorClassCardContainer() {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  return (
    <Container>
      <div className="text-center">
        <a
          href="#"
          className="btn btn-primary mb-3 .btn-block btn-lg w-100"
          onClick={toggle}
        >
          Add Class
        </a>

        <Modal fade={false} isOpen={modal} toggle={toggle}>
          <ModalHeader>Add a New Class</ModalHeader>
          <ModalBody>
            <InstructorsAddClassWFormik toggle={toggle} />
          </ModalBody>
        </Modal>
      </div>
      <InstructorClassCard />
    </Container>
  );
}

export default InstructorClassCardContainer;
