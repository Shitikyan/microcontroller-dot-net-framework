import { CaretDownOutlined, CaretUpOutlined } from '@ant-design/icons';
import { Button, Slider } from 'antd';
import React, { useCallback, useEffect, useState } from 'react'
import useWebSocket, { ReadyState } from 'react-use-websocket';

type Props = {
  room?: number
}

const SamplePage = (props: Props) => {
  const socketUrl = 'ws://192.168.168.120:7890/Echo'; // There will be 400 rooms in the production
  const [messageHistory, setMessageHistory] = useState([]);
  const [lightsLevel, setLightsLevel] = useState(0);
  
  const { sendMessage, lastMessage, readyState } = useWebSocket(socketUrl, {shouldReconnect: (closeEvent) => true});

  const onValueChange = (value: number) => {
    setLightsLevel(value)
    sendToBackend(value)
  };
  
  const onFullLights = useCallback(() => {
    setLightsLevel(100)
    sendToBackend(100)
  }, []);

  const onZeroLights = useCallback(() => {
    setLightsLevel(0)
    sendToBackend(0)
  }, []);

  const sendToBackend = useCallback((value: number) => {
    sendMessage(value.toString())
    console.log("Current value is: " + value);
  }, []);

  useEffect(() => {
    if (lastMessage !== null) {
      setMessageHistory(lastMessage.data);
    }
  }, [lastMessage, setMessageHistory]);

  const connectionStatus = {
    [ReadyState.CONNECTING]: 'Connecting',
    [ReadyState.OPEN]: 'Open',
    [ReadyState.CLOSING]: 'Closing',
    [ReadyState.CLOSED]: 'Closed',
    [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
  }[readyState];

  const style: React.CSSProperties = {
    display: 'inline-block',
    height: 300,
    marginLeft: 5,
  };
  
  return (
    <>
      <h1>Light number {props.room}</h1>
      <div className='customStyle'>
          <Button
            type="primary"
            icon={<CaretUpOutlined />}
            onClick={onFullLights}
          >
              100% 
          </Button>
          <br/>
          <div style={style}>
            <Slider vertical defaultValue={30} value={lightsLevel} onChange={onValueChange}/>
          </div>
          <br/>
          <Button
            type="primary"
            onClick={onZeroLights}
            icon={<CaretDownOutlined />}
          >
              Zero
          </Button>
      </div>
      <p>Response from the server: {messageHistory}</p>
      <p>Connection status: {connectionStatus}</p>
    </>
  )
}

export default SamplePage;