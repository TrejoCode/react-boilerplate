/**
 *  @name: other.jsx
 *  @version: 1.0.0
 *  @author: Trejocode - Sergio
 *  @description: Página de nosotros
*/

import React, { Component } from 'react';
import Layout from './layout';

// Componentes
import nprogress from 'nprogress';

// HTTP Cliente
import Request from '../utils/http';
const request = new Request();

class PageOther extends Component {

    state = {
        loading: true, user: { first_name: '' }
    }

    render() {
        const { first_name } = this.state.user;
        return (
            <Layout title = "Nosotros" description = "Descripción de la página de Nosotros" keywords = "Reactjs, SEO Ready, Ejemplo" >
                <div className="public column">
                    <div className="white-space-32"></div>
                    <div className="justify-center">
                        <div className="container column">
                            <div className="justify-center full">
                                <h1> Nosotros Page </h1>
                            </div>
                            <div className="white-space-16"></div>
                            <div className="justify-center">
                                { first_name }
                            </div>
                        </div>
                    </div>
                    <div className="white-space-32"></div>
                </div>
            </Layout>
        );
    }

    // Llama desde un API
    componentDidMount() { 
        nprogress.start();
        this.loadData();
    }

    /**
     * @name: loadData
     * @description: Obtención de un nombre empleando un Web API, con loader.
    */
    async loadData() {
        nprogress.inc();
        const response = await request.get('/users/2');
        if (response && response.statusCode === 200) {
            const { result } = response;
            setTimeout(() => {
                this.setState({ user: result.data });
                nprogress.done();
            }, 2000);
        } else {
            this.setState({ loading: false });
            nprogress.done();
        }
    }

}
export default PageOther;