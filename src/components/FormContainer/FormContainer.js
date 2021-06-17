import React, { useState } from 'react'
import { Form } from '../../components'

// Logic Component
function FormContainer() {

  // Initial user data state, it starts empty
  const initialState = {
    name: '',
    email: '',
    mobile: '',
    age: ''
  }
  const [userData, setUserData] = useState(initialState)


  // Function to handle change of multiple inputs and set the user state
  const handleInput = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value
    })
  }

  // State to handle the feedback for the user
  const [send, setSend] = useState({
    loading: false,
    feedbackMessage: false,
    error: {}
  })


  // Function to validate that user data is correctly filled up
  function validarForm() {
    let valid = true
    let field = userData
    let errors = {}

    // Validate user field
    if(field['name'] === '') {
      valid = false
      errors['name'] = 'El nombre es requerido'
    }
    if(userData.name.length < 3) {
      valid = false
      errors['name'] = 'El nombre debe tener al menos tres caracteres'
    }

    // Validate email field
    if(!/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(userData.email)) {
      valid = false
      errors['email'] = 'Ingresa un email válido'
    }

    // Validate mobile field
    if(!/^[0-9\-+]{9,15}$/.test(userData.mobile)) {
      valid = false
      errors['mobile'] = 'Ingresa un número válido'
    }

    // Validate age field
    if(userData.age < 18) {
      valid = false
      errors['age'] = 'Edad debe ser entre 18 y 99 años'
    }
    if(userData.age > 100) {
      valid = false
      errors['age'] = 'Edad debe ser entre 18 y 99 años'
    }

    // Set errors messages to the error state
    setSend({
      ...send,
      error: errors
    })

    // Will the value if it's validated or not
    return valid
  }


  // Function to send the user data to the console (server)
  const handleSubmit = (e) => {
    e.preventDefault()

    // Applying the validation test, if it's correct, will run the next code
    if(validarForm()) {
      // Loading state pass to true
      setSend({ loading: true })

      // Simulating a call to a real server with setTimeout function
      const timer = setTimeout(() => {

        // After one minute the user data will display in the console and the loading state pass to false
        console.log(userData)
        console.log('Sent successfully!')
        setSend({ loading: false })

        // Restart to the initial user state
        e.target.reset()
        setUserData(initialState)

        // Immediately a feedback message will display to the user
        setSend({ feedbackMessage: true })
        // After 5 seconds will hide
        const feedbackTimer = setTimeout(() => {
          setSend({ feedbackMessage: false })
        }, 5000)
        return () => clearTimeout(feedbackTimer)

      }, 1000)
      return () => clearTimeout(timer)
    }
  }

  return (
    // Passing props to UI components
    <Form
      handleInput={handleInput}
      handleSubmit={handleSubmit}
      send={send}
    />
  )
}

export default FormContainer
