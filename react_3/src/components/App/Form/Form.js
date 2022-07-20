import classes from './Form.module.css'

import { useState } from 'react'
import Label from './../../UI/Label/Label'
import Input from './../../UI/Input/Input'
import Button from './../../UI/Button/Button'
import Error from './Error/Error'



const Form = dataProps => {



	const [usernameInputValue, setUsernameInputValue] = useState('')
	const [passwordInputValue, setPasswordInputValue] = useState('')
	const [usernameInputStatus, setUsernameInputStatus] = useState(true)
	const [passwordInputStatus, setPasswordInputStatus] = useState(true)
	const [errorComponentVisibilityStatus, setErrorComponentVisibilityStatus] = useState(false)
	const [errorMessage, setErrorMessage] = useState('')



	const inputHandler = input => {

		const value = input.value
		const valueLength = value.trim().length
		if(input.type === 'text') {
			if(valueLength > 0) {
				setUsernameInputStatus(true)
			}
			setUsernameInputValue(value)
			return
		}
		if(valueLength > 0) {
			setPasswordInputStatus(true)
		}
		setPasswordInputValue(value)

	}

	const submitHandler = event => {

		event.preventDefault()

		const usernameInputLength = usernameInputValue.trim().length
		const passwordInputLength = passwordInputValue.trim().length
		if(usernameInputLength === 0 || passwordInputLength === 0) {
			if(errorMessage) {
				setErrorMessage('')
			}
			if(usernameInputLength === 0) {
				setUsernameInputStatus(false)
				setErrorMessage('______________\nenter username')
			}
			if(passwordInputLength === 0) {
				setPasswordInputStatus(false)
				if(!usernameInputLength) {
					setErrorMessage(previousErrorMessage => previousErrorMessage + '\n______________\nenter password')
				} else {
					setErrorMessage('______________\nenter password')
				}
			}
			setErrorComponentVisibilityStatus(true)
			return
		}

		setUsernameInputValue('')
		setPasswordInputValue('')

		dataProps.onAdd({
			id: 'id_',
			username: usernameInputValue,
			password: passwordInputValue
		})

	}

	const errorClickHandler = () => {

		setErrorComponentVisibilityStatus(false)

	}


	return (


<div>



 <Error
  visibilityStatus={ errorComponentVisibilityStatus }
  message={ errorMessage }
  onClick={ errorClickHandler }
 />

 <form className={ classes.form } onSubmit={ submitHandler }>
  <div>
   <div>
    <Label innerText='username' />
   </div>

   <Input
    type='text'
    value={ usernameInputValue }
    status={ usernameInputStatus }
    inputHandler={ inputHandler }
   />
  </div>

  <div>
   <div>
    <Label innerText='password' />
   </div>

   <Input
    type='password'
    value={ passwordInputValue }
    status={ passwordInputStatus }
    inputHandler={ inputHandler }
   />
  </div>

  <Button type='submit' innerText='submit' />
 </form>



</div>



	)



}



export default Form
