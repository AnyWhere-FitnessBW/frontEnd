import React, { useState, useEffect } from "react";
import withAuth from "../../axios";

// Added for modal Edit>>>
import { Container, Modal, ModalBody, ModalHeader } from "reactstrap";
import InstructorsEditClassWFormik from "./InstructorsEditClass";

function InstructorClassCard() {
  const [iClasses, setiClasses] = useState([]);
  //Added for modal edit>>>
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const baseUrl = "https://bw4-anywhere-fitness.herokuapp.com";

  useEffect(() => {
    withAuth()
      .get(baseUrl + "/api/instructor/class")
      .then(response => {
        // debugger;
        setiClasses(response.data);
        // alert("ClassCardSUCC" + response.data.message);
      })
      .catch(error => {
        alert("ClassCardERR" + error);
      });
  }, [iClasses]);

  function deleteClass(classID) {
    withAuth()
      .delete(baseUrl + "/api/instructor/class/" + classID)
      .then(response => {
        console.log(response);
      })
      .catch(error => {
        console.log(error);
      });
  }

  function getCurrentClassdata(id) {
    withAuth()
      .get(baseUrl + "/api/instructor/class")
      .then(response => {
        const editClass = response.data.find(editClass => editClass.id == id);
        console.log(editClass);
      })
      .catch(error => {
        alert("Get Class Data" + error);
      });
    toggle();
  }

  return (
    <div className="d-flex flex-row justify-content-between flex-wrap">
      {iClasses.map(iClass => (
        <div className="card mb-2 mr-2 w-50" key={iClass.id}>
          <div className="card-body">
            <div className="d-flex flex-row justify-content-between">
              <h5 className="card-title">Fitness Class</h5>
              <p className="text-capitalize">{iClass.type}</p>
              <p className="text-capitalize">
                <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                {iClass.location}
              </p>
            </div>
            <p className="card-text">
              <span className="text-secondary">
                <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                {iClass.date.slice(0, 10)}
                {"  "}
                <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                {iClass.startTime.slice(0, 5)}
              </span>
            </p>
            <div className="d-flex flex-row justify-content-between">
              <h6 className="text-capitalize text-info">{iClass.intensityLevel}</h6>
              <p>
                <i className="fa fa-hourglass-start" aria-hidden="true"></i>{" "}
                {iClass.duration} Minutes
              </p>
            </div>
            <p className="card-text">{iClass.description}</p>
            <div className="d-flex flex-row justify-content-between">
              <p className="text-primary">
                {iClass.registeredAttendees}/{iClass.maxClassSize}
              </p>
              <div className="text-right">
                {/* // Edit class modal>>> */}

                <a
                  href="#"
                  className="btn btn-primary mr-2"
                  onClick={e => getCurrentClassdata(iClass.id)}
                >
                  Edit
                </a>
                <Modal fade={false} isOpen={modal} toggle={toggle}>
                  <ModalHeader>Edit Class</ModalHeader>
                  <ModalBody>
                    <InstructorsEditClassWFormik toggle={toggle} />
                  </ModalBody>
                </Modal>
                <a
                  href="#"
                  className="btn btn-danger"
                  onClick={e => deleteClass(iClass.id)}
                >
                  Delete
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default InstructorClassCard;
