import React, { useState, useEffect } from "react";
import { Modal, ModalBody, ModalHeader } from "reactstrap";
import RescheduleClassWFormik from "./RescheduleClass";
import withAuth from "../../axios";

function ClientClassEditCard() {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const [regClasses, setRegClasses] = useState([]);

  const baseUrl = "https://bw4-anywhere-fitness.herokuapp.com";

  useEffect(() => {
    withAuth()
      .get(baseUrl + "/api/client/reservations")
      // .then(response => response.json)
      .then(response => {
        setRegClasses(response.data);
      })
      .catch(error => console.log(error));
  }, [regClasses]);

  function delReservation(classId) {
    withAuth()
      .delete(baseUrl + "/api/client/reservations/" + classId)
      .then(response => {
        alert(response.data.message);
      })
      .catch(error => {
        alert(error);
      });
  }

  return (
    <div className="d-flex flex-row justify-content-between flex-wrap">
      {regClasses.map(regClass => {
        return (
          <div className="card mb-2 mr-2" key={regClass.classId}>
            <div className="card-body">
              <div className="d-flex flex-row justify-content-between">
                <h5 className="card-title">Fitness Class</h5>
                <p className="text-capitalize">{regClass.type}</p>
                <p className="text-capitalize">
                  <i className="fa fa-map-marker" aria-hidden="true"></i>{" "}
                  {regClass.location}
                </p>
              </div>

              <p className="card-text">
                <span className="text-secondary">
                  <i className="fa fa-calendar" aria-hidden="true"></i>{" "}
                  {regClass.date.slice(0, 10)}
                  {"  "}
                  <i className="fa fa-clock-o" aria-hidden="true"></i>{" "}
                  {regClass.startTime.slice(0, 5)}
                </span>
              </p>

              <div className="d-flex flex-row justify-content-between">
                <h6 className="mb-2 text-info text-capitalize">
                  {regClass.intensityLevel}
                </h6>
                <p>
                  <i className="fa fa-hourglass-start" aria-hidden="true"></i>{" "}
                  {regClass.duration} Minutes
                </p>
              </div>
              <p className="card-text">{regClass.description}</p>
              <div className="d-flex flex-row justify-content-between">
                <p className="text-primary text-capitalize">
                  {regClass.registeredAttendees}/{regClass.maxClassSize}
                </p>
                <div className="text-right">
                  <a
                    href="#"
                    className="btn btn-danger"
                    onClick={e => delReservation(regClass.classId)}
                  >
                    Cancel Reservation
                  </a>
                </div>
              </div>
            </div>

            <Modal fade={false} isOpen={modal} toggle={toggle}>
              <ModalHeader>Edit your class</ModalHeader>
              <ModalBody>
                <RescheduleClassWFormik />
              </ModalBody>
            </Modal>
          </div>
        );
      })}
    </div>
  );
}

export default ClientClassEditCard;
