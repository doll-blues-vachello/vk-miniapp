import React, { useState, useEffect } from "react";
import bridge from "@vkontakte/vk-bridge";

import {
  Panel,
  PanelHeader,
  Group,
  Progress,
  Div,
  Button,
} from "@vkontakte/vkui";

const BitSaber = ({ id }) => {
  const ticks = 8;
  const [tick, setTick] = useState(0);
  const [active, setActive] = useState(false);
  const [tickMap, setTickMap] = useState([]);
  const initState = () => {
    setTickMap(Array(ticks).fill(false))
  };
  useEffect(() => {
    if (tickMap[tick]) {
      bridge.send("VKWebAppFlashSetLevel", { level: 1.0 });
    } else {
      bridge.send("VKWebAppFlashSetLevel", { level: 0 });
    }
    active && setTimeout(() => doTick(), 1000);
  }, [tick, active, ticks]);

  useEffect(() => {
    initState();
  }, [ticks]);

  const doTick = async () => {
    active && setTick((t) => (t + 1) % ticks);
  };

  const reset = () => {
    setTick(0);
    setActive(false);
    initState();
    bridge.send("VKWebAppFlashSetLevel", { level: 0 });
  };

  return (
    <Panel id={id}>
      <PanelHeader>{"</> Yeah, Bash!"}</PanelHeader>
      <Group>
        <Progress value={((tick + 1) / ticks) * 100} />
        <Div className="py-4">
          <Button
            mode={!active ? "commerce" : "destructive"}
            className="w-full mx-auto max-w-3xl block"
            onClick={() => setActive((s) => !s)}
            size="l"
          >
            {!active ? "Play!" : "Stop"}
          </Button>
        </Div>
        <Div className={"flex flex-row items-center py-4 justify-center"}>
          {tickMap.map((v, i) => (
            <Button
              key={i}
              mode={tick === i ? "outline" : v ? "commerce" : "secondary"}
              onClick={() =>
                setTickMap((m) => m.map((v, ind) => (i === ind ? !v : v)))
              }
              className="py-2"
              size={"s"}
            >
              {" "}
            </Button>
          ))}
        </Div>
        <Button
          mode={"secondary"}
          className="w-full mx-auto max-w-3xl block"
          onClick={() => reset()}
          size={"m"}
        >
          Reset
        </Button>
      </Group>
    </Panel>
  );
};

export default BitSaber;
