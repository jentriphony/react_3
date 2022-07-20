import classes from './Error.module.css'

import Button from './../../../UI/Button/Button'



const Error = dataProps => {



	return (

<div className={ `
 ${ classes.error }
 ${ !dataProps.visibilityStatus ? ' ' + classes.hide : '' }
` }>



 <p>{ dataProps.message }</p>

 <Button
  type='button'
  onClick={ dataProps.onClick }
  innerText='ok'
 />



</div>

	)



}



export default Error
