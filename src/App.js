import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";
import {
  View,
  AdaptivityProvider,
  AppRoot,
  CellButton,
  Panel,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import Home from "./panels/Home";
import BitSaber from "./panels/BitSaber";

import "./app.css";

const App = () => {
  const [activePanel, setActivePanel] = useState("home");
  const [fetchedUser, setUser] = useState(null);
  const [popout, setPopout] = useState(null);

  useEffect(() => {
    bridge.subscribe(({ detail: { type, data } }) => {
      if (type === "VKWebAppUpdateConfig") {
        const schemeAttribute = document.createAttribute("scheme");
        schemeAttribute.value = data.scheme ? data.scheme : "client_light";
        document.body.attributes.setNamedItem(schemeAttribute);
      }
    });
    async function fetchData() {
      const user = await bridge.send("VKWebAppGetUserInfo");
      setUser(user);
      setPopout(null);
    }
    fetchData();
  }, []);

  const go = (e) => {
    setActivePanel(e.currentTarget.dataset.to);
  };

  return (
    <AdaptivityProvider>
      <AppRoot>
        <View activePanel={activePanel} popout={popout}>
          <Panel id="home">
            <Home fetchedUser={fetchedUser} go={go} />
            <CellButton onClick={() => setActivePanel("BitSaber")}>
              Go to the BitSaber
            </CellButton>
          </Panel>
          <Panel id="BitSaber">
            <BitSaber go={go} />
            <CellButton onClick={() => setActivePanel("home")}>
              Back To Home
            </CellButton>
          </Panel>
        </View>
      </AppRoot>
    </AdaptivityProvider>
  );
};

export default App;
