import React,  { useState } from 'react';
import { Form, FloatingLabel, Button } from 'react-bootstrap';
import { validateEmail } from '../../utils/helpers';

function ContactForm() {

    const [errorMessage, setErrorMessage] = useState('');

    const [formState, setFormState] = useState({ name: '', email: '', message: ''});

    const { name, email, message } = formState;

    function handleChange(e) {
       if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
        if (!isValid) {
            setErrorMessage('Your Email is invalid.');
        } else {
             if (!e.target.value.length) {
                 setErrorMessage('${e.target.name} is required.');
             } else {
                 setErrorMessage('');
             }
         }
        }
        if (!errorMessage) {
         setFormState({...formState, [e.target.name]: e.target.value })
      }
    }
    
    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
         <section>
             <h1>Contact Me!</h1>
             <Form onSubmit={handleSubmit}>
                 <Form.Group className='mb-3' controlId='formBasicName'>
                     <Form.Label>Name:</Form.Label> 
                     <Form.Control 
                     type="text"  
                     defaultValue={name} 
                     onChange={handleChange}
                     placeholder="Name" />
                 </Form.Group>
                 
                 <Form.Group className='mb-3' controlId='formBasicEmail'>
                     <Form.Label>Email:</Form.Label>
                     <Form.Control 
                     type="email"  
                     defaultValue={email} 
                     onChange={handleChange}
                     placeholder="Enter Email" />
                     <Form.Text className='text-muted'>
                        We'll never share your email with anyone.
                     </Form.Text>
                 </Form.Group>

                 <FloatingLabel className='mb-3' controlId='floatingTextarea2'>
                     <Form.Label>Message:</Form.Label>
                   <Form.Control 
                     as="textarea"
                     placeholder="Enter a Message" 
                     style={{ height: '200px' }}
                     defaultValue={message}
                     onChange={handleChange}
                   />
                 </FloatingLabel>
                 <Button variant="primary">Submit</Button>{' '}
             </Form>
         </section>
    )

}

export default ContactForm;