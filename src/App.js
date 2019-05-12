import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import TodosList from './components/todos-list.component';
import CreateTodo from './components/create-todo.component';
import EditTodo from './components/edit-todo.component';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
	render() {
		return (
			<Router>
				<div className='container'>
					<nav className='navbar navbar-expand-lg navbar-light bg-light'>
						<Link to='/' className='navbar-brand'>
							MERN Todo
						</Link>
						<div className='collapse navbar-collapse'>
							<ul className='navbar-nav mr-auto'>
								<li className='navbar-item'>
									<Link to='/' className='nav-link'>
										Todos
									</Link>
								</li>
								<li>
									<Link to='/create' className='nav-link'>
										Create
									</Link>
								</li>
							</ul>
						</div>
					</nav>
					<br />
					<Route path='/' exact component={TodosList} />
					<Route path='/edit/:id' exact component={EditTodo} />
					<Route path='/create' exact component={CreateTodo} />
				</div>
			</Router>
		);
	}
}

export default App;
