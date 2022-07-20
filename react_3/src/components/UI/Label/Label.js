import classes from './Label.module.css'



const Label = dataProps => {



	return (

<label className={ classes.label }>
 { dataProps.innerText }
</label>

)



}



export default Label
