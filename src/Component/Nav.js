import { useContext } from "react";
import { Outlet } from "react-router-dom";
import { ThemeContext } from "../Context/ThemeContext";
import light from '../Images/light.svg';
import dark from '../Images/dark.svg';

function Nav(){

  const {theme,setTheme}= useContext(ThemeContext);
  console.log(theme);

  let mystyle = {};
  if(theme === 'light'){
    mystyle ={
      background : '#3498db',
      color : '#111010ff'
    }
  }
  else{
    mystyle={
      background : '#e91e63',
      color :'#f4f0f0ff'
    }
  }
    return(
    <>
    <header>
      <nav className="navbar navbar-expand-sm" style={mystyle} >
        <ul class="nav nav-pills">
    <li class="nav-item">
      <a class="nav-link active" href="/home">Home</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/about">About</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/contact">ContactUs</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/product">Products</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/services">Services</a>
    </li>
    <li>
      {
        theme === 'light'?
        (
          <img src={dark} onClick={()=>setTheme('dark')} />


        )
        :
        (
           <img src={light} onClick={()=>setTheme('light')} />
        )
      }
    </li>
  </ul>
  </nav>
    </header>

    <main>
        <Outlet />
    </main>
        
    </>
    );
   
}
export default Nav;