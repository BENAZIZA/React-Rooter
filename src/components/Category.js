import React from 'react'
import {Link, Route } from 'react-router-dom';


const Category =({match})=>
{
	
	return(
		<div>
		<li><Link to={`${match.url}/Shoes`}>Shoes</Link></li>
		<li><Link to={`${match.url}/Boots`}>Boots</Link></li>
		<li><Link to={`${match.url}/Footwear`}>Footwear</Link></li>
		<Route path={`${match.path}/:name`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>

		</div>

		)
}
export default Category;