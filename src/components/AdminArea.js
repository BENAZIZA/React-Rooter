import React,{useState} from 'react';
import { Redirect } from 'react-router-dom';
    const AdminArea =(props)=>
    {
    const [redirectRef,setRedirectRef]=useState({
      redirectToReferrer: false
    })
    
    const login = () => {
    fakeAuth.authenticate(() => {
       setRedirectRef ({ redirectToReferrer: true })
    })
  }
    const { from } = props.location.redirectRef || { from: { pathname: '/Admin' } }
    const { redirectToReferrer } = redirectRef;
    if (redirectToReferrer) {
      return (
        <Redirect to={from} />
      )
    }
    return (
      <div>
        <p>You must log in to view the page at {from.pathname}</p>
        <button onClick={login}>Log in</button>
      </div>
    )
  }
export const fakeAuth = {

  isAuthenticated: false,
  authenticate(cb) {
    this.isAuthenticated = true
     setTimeout(cb, 100)
  },
}
export default AdminArea ;