import classes from './Element.module.css'



const Element = dataProps => {



	const element = dataProps.element



	const clickHandler = () => {

		dataProps.clickHandler(element.id)

	}


	return (

<li className={ classes.element } onClick={ clickHandler }>
 { element.username }
</li>

)



}



export default Element
