import React from 'react'
import { connect } from 'react-redux'
import { Field, reduxForm } from 'redux-form'


const validate = values => {
    var letters = /^[A-Za-z ]+$/
    const errors = {}
    if (!values.name) {
      errors.name = 'Required'
    } else if (!values.name.match(letters)) {
      errors.name = 'Must be only alphabets'
    }
    if (!values.area) {
        errors.area = 'Required'
      }
    if (!values.category) {
        errors.category= 'Required'
      }
    if(!values.open){
        errors.open="Required"
    }
    if(!values.close){
        errors.close="Required"
    }
    if(values.close <values.open){
        errors.close='closing time must be greatar than opening time'
    }
    return errors
  }


// <Input Field>

const renderField = ({
    input,
    label,
    type,
    meta: { touched, error, warning }
  }) => (
    <div>
      <label>{label}</label>
      <div>
        <input {...input} placeholder={label} type={type} />
        {touched &&
          ((error && <span>{error}</span>) ||
            (warning && <span>{warning}</span>))}
      </div>
    </div>
  )

  // <Selected Field------->

  const renderSelector = ({ arr,input, meta: { touched, error } }) => (
    <div>
      <select {...input}>
        <option value="">Select an option...</option>
        {arr.map(val => (
          <option value={val} key={val}>
            {val}
          </option>
        ))}
      </select>
      {touched && error && <span>{error}</span>}
    </div>
  )

// <Actual FillForm>

const AddShop= props => {
    const submit = values=>{
         props.onSubmit(values)
         props.reset()
    }    
    const { handleSubmit,submitting } = props
    return (
      <form className={`pop-up`} onSubmit={handleSubmit(submit)}>
        <Field
          name="name"
          type="text"
          component={renderField}
          label="Name of the shop"
        />
        <div>
        <label>Area</label>
            <Field 
                name="area" 
                component={renderSelector} 
                arr={['Thane','Pune','Mumbai Suburban','Nashik','Nagpur','Ahmednagar','Solapur']} />
        </div>
        <div>
        <label>Category</label>
            <Field 
                name="category" 
                component={renderSelector} 
                arr={['Grocery','Butcher','Baker','Chemist','Stationery']} />
        </div>
        <div>
        
            <Field 
                name="open" 
                type="time"
                component={renderField} 
                label='Opening date' />
        </div>
        <div>
    
            <Field 
                name="close" 
                type="time"
                component={renderField} 
                label='closing date' />
        </div>
        <div className={`flex center`}>
            <button className='btn blue'type="submit" disabled={submitting}>
            Submit
          </button>
        </div>
      </form>
    )
  }
  
  const mapStateToProps = state => ({
    shops:state.shops,
    add:state.add,
    edit:state.edit
 });
  export default reduxForm({
    form: 'AddShop',
    validate, 
  })(connect(mapStateToProps)(AddShop))