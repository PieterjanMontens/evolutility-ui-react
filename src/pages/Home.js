import React from 'react';
import { Link } from 'react-router-dom';
import { version, proxy } from '../../package.json';
import { apiPath } from '../config.js';
import Format from '../utils/format';

import './Home.scss'

const apiPathFull = Format.urlJoin(typeof proxy !== "undefined" ? proxy : '', apiPath)

export default class Home extends React.PureComponent {

    componentDidMount() {
        document.title = 'Evolutility';
        window.scrollTo(0, 0);
    }

    render() {
        return (

        <div className="evo-home">
                         
            <h1 className="siteTitle">ANDi</h1>
            <h2 className="tBlue">Interface de gestion des données internes</h2> 
            <div className="cSet">
                
                <div className="component">
                    <h2>Données Profils</h2> 
                    <p>Données de profils (inscriptions, utilisateurs, entreprises, ...)</p>
                    <p>Données Accessibles:{' '}
                        <ul>
                            <li><Link to="/user/list">Inscriptions</Link></li> 
                            <li><Link to="/company/list">Entreprises</Link></li>
                        </ul>
                    </p>
                </div>

                <div className="component">
                    <h2>Données Immersions</h2> 
                    <p>Données propres à l'organisation des Immersions</p>
                    <p>Données Accessibles:{' '}
                        <ul>
                            <li><Link to="/jdb_psh/list">Journeaux de bord PSH</Link></li> 
                            <li><Link to="/jdb_entreprise/list">Journeaux de bord Entreprises</Link></li>
                        </ul>
                    </p>
                </div>


                <div className="component">
                    <h2>Données ANDi</h2> 
                    <p>Autres données propres à ANDi et à son fonctionnement: gestion des éléments de texte et de langage (landing page, mail questionnaire), ... </p>

                    <p>Données Accessibles:{' '}
                        <Link to="/asset/list">Éléments de contenu</Link>
                    </p>
                </div>
            </div>
            <p>Cet outil est en cours de co-conception avec vous, merci d'adresser remarques, avis et observations à Pieterjan (sur Slack c'est bien ;) )
            </p>
        </div>
        
        );
    }
}
