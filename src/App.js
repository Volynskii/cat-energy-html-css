import React from 'react';
import {BrowserRouter, Route,Switch} from 'react-router-dom'

import Main from "./components/main-page";
import {Catalog} from "./components/catalog-page";


function App() {
    return (
        <>
        <BrowserRouter>
        <Switch>
        <Route path={'/'} exact component={Main}/>
            {/*<Route path={'/form'} component={Form}/>*/}
            {/*<Route path={'/catalog'} component={Catalog}/>*/}
    </Switch>
    </BrowserRouter>

    </>
);
}

export default App;
