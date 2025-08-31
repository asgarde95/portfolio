import React from "react";

const Home: React.FC = () => {
  return (
    <section style={{ padding: "2rem" }}>
      <h1>Trayectoria profesional</h1>
      <h2>Destinia S.L.U. (2022 - Actualidad)</h2>
      <a href="https://destinia.com/">Agencia de viajes</a>
      <p>
        Actualmente me encuentro trabajando en un CRM propio.
        <br/>
        Backend: PHP 8.2, PhpUnit, MySql(MariaDB), MongoDb, Redis ... 
        <br/>
        Frontend: Vue.js 3 Options API JavaScript, Cypress, Vuex (Store), i18n(Internationalization), Router ...
        <br/>
        Otras skills: n8n, Knowage(BI), Cerb.ai (helpdesk), ...
        <br/>
      </p>
    </section>
  );
};

export default Home;
