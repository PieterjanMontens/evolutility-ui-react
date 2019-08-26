
import React from 'react'
import { Link } from 'react-router-dom'

import logoEvol from './evologo.gif'
import logoGithub from './github.png'

import './TopBar.scss'

// TODO: use Portal to nest toolbar
export default class TopBar extends React.PureComponent {

    render() {
 // <Link to='/designer' style={{float:'right', color:'white'}}><i className='glyphicon glyphicon-cog' /></Link>
        return (   
            <header className="TopBar" role="banner">
                <Link to='/' className="homeLink" >ANDi - données internes</Link>
                {
                //<Link to='/'><img src={logoEvol} className="tbLogo" alt="" /></Link>
                }
                <a className="github" target="github" href="https://github.com/betagouv/andi" data-hotkey="g d">
                <img src={logoGithub} alt="Github" title="Github" />
                </a>

            </header>
        )
    }

}
