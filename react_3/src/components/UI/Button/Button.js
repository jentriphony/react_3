import classes from './Button.module.css'



const Button = dataProps => {



	return (

<button className={ classes.button } onClick={ dataProps.onClick }>



 { dataProps.innerText }



</button>

	)



}



export default Button
