import classes from './List.module.css'

import Element from './Element/Element'



const List = dataProps => {



	const list = dataProps.list
	let list_ = null



	const elementClickHandler = id => {

		dataProps.onDelete(id)

	}

	list_ = list.length > 0 ? list.map(element => (

<Element key={ element.id } element={ element } clickHandler={ elementClickHandler } />

	)) : (

<p>
 no elements
</p>

	)


	return (

<ul className={ classes.list }>



 { list_ }



</ul>

	)



}



export default List
