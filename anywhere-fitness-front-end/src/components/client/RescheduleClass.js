import React from "react";
import { Button } from "reactstrap";
import { withFormik, Form, Field } from "formik";

function RescheduleClass(props) {
  function rescheduleAlert() { alert("FitnessClass/id Rescheduled"); }

  return (
    <Form>
      <div className="form-group">
        <label htmlFor="datetime">New Date/Time</label>
        <Field type="datetime-local" name="datetime" id="datetime" className="form-control"/>
      </div>
      <Button color="success" onClick={rescheduleAlert}>Submit</Button>
    </Form>
  );
}

const RescheduleClassWFormik = withFormik({
    mapPropsToValues() {
        return {
            datetime: ""
        }
    } 
})(RescheduleClass)

export default RescheduleClassWFormik;
