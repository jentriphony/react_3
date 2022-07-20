import classes from './Input.module.css'



const Input = dataProps => {



	const inputHandler = event => {

		dataProps.inputHandler(event.target)

	}


	return (

<input
 type={ dataProps.type }
 value={ dataProps.value }
 className={ `
  ${ classes.input }
  ${ dataProps.status ? '' : ' ' + classes.error }
 ` }
 onInput={ inputHandler }
/>

	)



}



export default Input
