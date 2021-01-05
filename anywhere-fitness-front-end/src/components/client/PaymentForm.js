// import CardForm from 'react-payment/dist/CardForm';

 
// export default function OnSubmit (card) {
//   const { number, exp_month, exp_year, cvc, name, zip } = card;
//   Stripe.card.createToken({
//     number,
//     exp_month,
//     exp_year,
//     cvc,
//     name,
//     address_zip: zip
//   }, (status, response) => {
//     if (response.error) {
//       alert('Adding card failed with error: ' + response.error.message);
//     } else {
//       const cardToken = response.id;
//       // send cardToken to server to be saved under the current user
//       // show success message and navigate away from form
//     }
//   });
// }
 
// <CardForm
//   onSubmit={this.onSubmit}
//   getName={true}
//   getZip={true}
// />


// import React from 'react';
// import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

// export default function Payment(props) {
//     return (
//         <div className="SignUp-Container">
//             <Form>
//                 <FormGroup>
//                     <Label for="exampleName">Name:</Label>
//                     <Input type="text" name="name" id="name" placeholder="Josemaria" />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="exampleSurname">Surname:</Label>
//                     <Input type="text" name="name" id="name" placeholder="DaCosta" />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="exampleEmail">Email:</Label>
//                     <Input type="email" name="email" id="exampleEmail" placeholder="JonDoe@gmail.com" />
//                 </FormGroup>
//                 <FormGroup>
//                     <Label for="examplePassword">Password:</Label>
//                     <Input type="password" name="password" id="examplePassword" placeholder="$PAssword124" />
//                 </FormGroup>
//                 <FormGroup>
//                     {/* <Label for="InstructorCode">instructorCode:</Label>
//                     <Input type="instructorCode" name="instructorCode" id="instructorCode" placeholder="(Instructors Only)" /> */}
//                 </FormGroup>
//                 <div className="text-right">
//                     <Button>Submit</Button>
//                 </div>
//             </Form>
//         </div>
//     )
// }