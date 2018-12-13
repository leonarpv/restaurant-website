import React from "react";
// import Helmet from "react-helmet";
import Layout from "../components/Layout/layout";
import styles from "../styles/index.module.css";
import "../styles/minireset.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

library.add(fab, faBars);

export default ({ data }) => (
    <Layout>
        <div className={styles.hero}>
            <h1 className={styles.heroText}>Serving fantastic Chinese food since 1996</h1>
        </div>
    </Layout>
)