import { useState } from 'react'
import Form from './components/App/Form/Form'
import List from './components/App/List/List'


const App = () => {



	const[list, setList] = useState([

		{
			id: 'id_1',
			username: 'username_1',
			password: 'password_1'
		},
		{
			id: 'id_2',
			username: 'username_2',
			password: 'password_2'
		}

	])



	const elementAddHandler = element => {

		setList(previousList => {
			element.id += list.length + 1
			const element_ = element
			return [
				...previousList,
				element_
			]
		})

	}

	const elementDeleteHandler = id => {

		setList(previousList => {
			const list_ = previousList.filter(element => element.id !== id).map((element, index) => {
				element.id = 'id_' + (index + 1)
				return element
			})
			return list_
		})

	}


	return (

<div>


 <div>
  <Form onAdd={ elementAddHandler } />
 </div>

 <div>
  <List list={ list } onDelete={ elementDeleteHandler } />
 </div>



</div>

	)


}



export default App
