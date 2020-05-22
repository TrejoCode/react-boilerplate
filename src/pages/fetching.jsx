/**
 *  @version 1.1.1
 *  @author Trejocode - Sergio
 *  @description Página de /fetch
*/

import React, { useState, useEffect } from 'react';
import Layout   from './layout';
import Request  from '../utils/http';
import Progress from '../libs/nprogress';


const PageFetch = () => {

    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        /**
         * @description: Obtener lista de usuarios
        */
        const fetchUsers = async () => {
            const request = new Request();
            const response = await request.get('/users');
            if (response && response.statusCode === 200) {
                const { result } = response;
                setTimeout(() => {
                    setUsers(result.data);
                    setIsLoading(false);
                }, 2500);
            } else {
                setUsers([]);
                setIsLoading(false);
            }
        }

        fetchUsers();

    }, []);

    return (
        <Layout title = "Data Fetching" description = "React Boilerplate: Página de Datos" keywords = "React.js, SEO Ready, Fetching" >
            <Progress isAnimating = { isLoading } />
            <div className="page-fetch justify-center">
                <div className="full justify-center align-center">
                    <div className="container column">
                        <div className="white-space-64"></div>
                        <div className="justify-center">
                            <h1 className="text-center color-secondary">
                                Data Fetching
                                <span role="img" aria-label="Icono de Radar">📡</span>
                            </h1>
                        </div>
                        <div className="white-space-16"></div>
                        <div className="justify-center">
                            <h2 className="color-gray text-center">
                                Edit /utils/http for configure HTTP Client
                                <span role="img" aria-label="Icono de Laptop"> 💻</span>
                            </h2>
                        </div>
                        <div className="white-space-16"></div>
                        <div className="justify-center">
                            <p className="text-center font-small">
                                Provided by: <a className = "underline" href="https://reqres.in">Reqres</a> With the power of <a className = "underline" href="https://github.com/visionmedia/superagent">Superagent</a>
                            </p>
                        </div>
                        <div className="white-space-32"></div>
                        <div className="table-container" aria-live="assertive">
                        { !isLoading &&
                            <div className="table-responsive">
                                <table>
                                    <thead>
                                        <tr>
                                            <th>ID</th>
                                            <th>Avatar</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            users.map((user, key) =>
                                                <tr key = { key }>
                                                    <td>{ user.id }</td>
                                                    <td>
                                                        <img src = { user.avatar } alt = { user.first_name } />
                                                    </td>
                                                    <td>{user.first_name}</td>
                                                    <td>{user.email}</td>
                                                </tr>
                                            )
                                        }
                                    </tbody>
                                    <caption className="font-small">Lista de usuarios desde Reqres</caption>
                                </table>
                            </div>
                        }
                        </div>
                        <div className="white-space-64"></div>
                    </div>
                </div>
            </div>
        </Layout>
    );

};

export default PageFetch;