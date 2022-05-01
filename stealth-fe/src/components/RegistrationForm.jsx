import React, { useState } from 'react'
import { Formik, Form } from 'formik';
import { schema } from './helpers/ValidationSchema';
import CustomField from './helpers/CustomField';


const initialValues = {
    name: '',
    email: '',
    mobile: '',
    city: '',
    country: '',
    state:'',
    message: ''
}

function RegistrationForm() {
    const [formValues, setFormValues] = useState(initialValues)

    const handleChange = (e) => {
        setFormValues({
            ...formValues,
            [e.target.name]: e.target.value
        });
        console.log(formValues)
    }

    const handleReset = (e) => {
        setFormValues({
            ...initialValues,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (values) => {
        console.log("form values ==>", values)
        alert("Submitted")
    }

    return (
        <div className='card'> 
            <div className= 'card-body'>
            <Formik
                initialValues={formValues}
                validationSchema={schema}
                onSubmit={handleSubmit}
            >
                {() => (
                    <Form>
                        <CustomField label={"Name"} name={"name"} type={"text"} change={handleChange}/>
                        <CustomField label={"Email"} name={"email"} type={"text"} change={handleChange} />
                        <CustomField label={"Mobile"} name={"mobile"} type={"text"} change={handleChange} />
                        <CustomField label={"Country"} name={"country"} type={"text"} change={handleChange}/>
                        <CustomField label={"City"} name={"city"} type={"text"} change={handleChange} />
                        <CustomField label={"State"} name={"state"} type={"text"} change={handleChange} />
                        <CustomField label={"Message"} name={"message"} type={"text"} change={handleChange} /> <br />
                        <button type="submit" className="btn btn-primary mt2 " >Submit</button> &nbsp;
                        <button type="reset" className="btn btn-danger mt2" onClick={handleReset}>Reset</button>
                    </Form>
                )}
            </Formik>
            </div>
        </div>
    )
}

export default RegistrationForm