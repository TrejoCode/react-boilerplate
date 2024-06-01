/**
 * @description Página de /fetch
 */

import { useState, useEffect, Fragment } from "react";
import { get } from "@/api";
import Layout from "./Layout";
import Progress from "@/components/nprogress";
import type { TypeReqResponse, TypeReqResUser } from "@/ts/api";

const PageFetch = (): JSX.Element => {
  const [users, setUsers] = useState<TypeReqResUser[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Obtener usuarios desde Reqres
    const fetchUsers = async (): Promise<void> => {
      const { data, error } = await get<TypeReqResponse>("/users");

      if (error) {
        setUsers([]);
        setIsLoading(false);
        return;
      }

      // Simular tiempo de carga
      setTimeout(() => {
        setUsers(data?.data ?? []);
        setIsLoading(false);
      }, 2500);
    };

    fetchUsers();
  }, []);

  return (
    <Layout
      title="Data Fetching"
      description="React Boilerplate: Página de Datos"
      keywords="React.js, SEO Ready, Fetching"
    >
      <Fragment>
        <Progress isAnimating={isLoading} />
        <div className="page-fetch justify-center">
          <div className="full justify-center align-center">
            <div className="container column">
              <div className="white-space-64"></div>
              <div className="justify-center">
                <h1 className="text-center color-secondary">
                  Data Fetching
                  <span role="img" aria-label="Icono de Radar">
                    📡
                  </span>
                </h1>
              </div>
              <div className="white-space-16"></div>
              <div className="justify-center">
                <h2 className="color-gray text-center">
                  Edit /utils/http for configure HTTP Client
                  <span role="img" aria-label="Icono de Laptop">
                    {" "}
                    💻
                  </span>
                </h2>
              </div>
              <div className="white-space-16"></div>
              <div className="justify-center">
                <p className="text-center font-small">
                  Provided by:{" "}
                  <a className="underline" href="https://reqres.in">
                    Reqres
                  </a>{" "}
                  With the power of{" "}
                  <a
                    className="underline"
                    href="https://github.com/axios/axios"
                  >
                    Axios
                  </a>
                </p>
              </div>
              <div className="white-space-32"></div>
              <div className="table-container" aria-live="assertive">
                {!isLoading && (
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
                        {users?.map((user) => (
                          <tr key={user?.id}>
                            <td>{user?.id}</td>
                            <td>
                              <img src={user?.avatar} alt={user?.first_name} />
                            </td>
                            <td>{user?.first_name}</td>
                            <td>{user?.email}</td>
                          </tr>
                        ))}
                      </tbody>
                      <caption className="font-small">
                        Lista de usuarios desde Reqres
                      </caption>
                    </table>
                  </div>
                )}
              </div>
              <div className="white-space-64"></div>
            </div>
          </div>
        </div>
      </Fragment>
    </Layout>
  );
};

export default PageFetch;
