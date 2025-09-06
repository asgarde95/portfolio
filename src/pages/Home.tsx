import React from "react";
import { useTranslation } from "react-i18next";

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section style={{ padding: "2rem" }}>
      <h1>{ t("1") }</h1>
      <h2>Destinia S.L.U. (2022 - { t("2") })</h2>
      <a href="https://destinia.com/">{ t("3") }</a>
      <p>
        {t("10")}
        <br/>
        {t("11")}
        <br/>
        {t("12")}
        <br/>
        {t("13")}
        <br/>
      </p>
    </section>
  );
};

export default Home;
