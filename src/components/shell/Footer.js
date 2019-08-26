import React from 'react';
//import { Link } from "react-router-dom";
import { version, copyright } from '../../../package.json';

import './Footer.scss';

export default class Footer extends React.PureComponent {

    render() {
        return <div className="Footer" role="contentinfo">
            <div className="Footer-links">
            	ANDi{' = '}
            	<a target="m" href="https://beta.gouv.fr/startups/andi.html">Une super équipe</a> 
                {' + '}
            	<a target="ui" href="https://www.caissedesdepots.fr/">Caisse des Dépôts</a> 
                {' + '}
            	<a target="db" href="https://beta.gouv.fr/">Beta.gouv.fr</a>
            </div>
            <span className="copyright">
                <span>l'équipe ANDi - construit avec <a href="http://www.evolutility.org/">Evolutility</a></span>
            </span>
        </div>
    }
}
