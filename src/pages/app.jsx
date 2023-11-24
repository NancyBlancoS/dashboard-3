import React from "react";

import Layout from "../templates/layout";
import Header from "../organisms/header";
import Menu from "../organisms/menu";
import User from "../organisms/user";
import Thread from "../organisms/thread";
import Search from "../organisms/search";

function App() {
  return (
    <div className="App">
      <Layout>
        <Menu/>
        <Header/>
        <User/>
        <Thread/>
        <Search/>
      </Layout>
    </div>
  );
}

export default App;