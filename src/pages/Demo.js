import React from 'react';
import { Link } from 'react-router-dom'

import './Demo.scss'

export default class Demo extends React.PureComponent {

    componentDidMount() {
        document.title = 'Evolutility';
        window.scrollTo(0, 0);
    }

    render() {
        return (
            <div className="evo-demo">
                <h1>Evolutility Demo Apps</h1>

                <p>These sample applications are not anything you haven't seen before. </p>
                <p>The interesting thing is that these demo apps are built with models rather than code... and you build more apps simply by making new models.
                </p>

                <div className="cSet">
                    <div className="component c1"> 
                        <h3>Personal Information Manager</h3>
                        <div className="demoLinks">
                            <Link to="/todo/list"><img src="/pix/todo.gif" alt="" title="To-Do list"/>To-Do list</Link>
                            <Link to="/contact/list"><img src="/pix/contact.gif" alt="" title="Address book"/>Address book</Link>
                            <Link to="/comics/cards"><img src="/pix/comics.png" alt="" title="Graphic Novels inventory"/>Graphic novels</Link>
                            <Link to="/restaurant/list"><img src="/pix/resto.gif" alt="" title="Restaurants list"/>Restaurants</Link> 
                            <Link to="/winecellar/list"><img src="/pix/wine-bottle.png" alt="" title="Wine Cellar"/>Wine Cellar</Link>
                            <Link to="/winetasting/list"><img src="/pix/wine.gif" alt="" title="Wine Tasting"/>Wine Tasting</Link>
                        </div>
                    </div>
                    <div className="component"> 
                        <h3>Music</h3>
                        <div className="demoLinks">
                            <Link to="/artist/cards"><img src="/pix/star.png" alt="" title="Artists"/>Artists</Link>
                            <Link to="/album/cards"><img src="/pix/cd.png" alt="" title="Albums"/>Albums</Link>
                            <Link to="/track/list"><img src="/pix/music.png" alt="" title="Music tracks"/>Tracks</Link>
                        </div>
                    </div>
                </div>

                <div className="component"> 
                <br/>
                    <p>
                        <Link to="/test/list">Test App</Link> with fields of all possible types.
                    </p>
                </div>
            </div>
        )
    }
}
