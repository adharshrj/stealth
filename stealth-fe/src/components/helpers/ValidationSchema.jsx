import * as yup from 'yup';

export const schema = yup.object().shape({
    name: yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[aA-zZ\s]+$/, 'Please enter a valid name')
    .required('Name is required'),
    
    email: yup.string()
    .email('Must be a valid email')
    .max(255)
    .required('Email is required'),

    mobile: yup.string()
    .matches(/^(\+91[\-\s]?)?[0]?(91)?[789]\d{9}$/, 'Enter valid mobile number'),

    country: yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[aA-zZ\s]+$/, 'Please enter a valid country'),

    city: yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[aA-zZ\s]+$/, 'Please enter a valid city'),

    state: yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .matches(/^[aA-zZ\s]+$/, 'Please enter a valid state')
})
