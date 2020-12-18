import React from 'react';
import {connect} from 'react-redux';

const InstructorDashboard = (props) => {
    return (
        <div>
            <h2>Welcome, Instructor</h2>
            <h3>Here are the ... you have listed right now:</h3>
            <div>
                Sorry, this feature is under contruction!
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        allInstructors: state.instructor.allInstructors,
        instructorData: state.instructor.instructorData
    }
}

export default connect(mapStateToProps, {})(InstructorDashboard);