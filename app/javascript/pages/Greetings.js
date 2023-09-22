import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../redux/messages/messagesSlice';
import Greeting from '../components/Greeting';

export default function Greetings() {
  const dispatch = useDispatch();

  // Access the 'status' property from the Redux store
  const {
    messageList,
    status,
  } = useSelector((store) => store.message);

  useEffect(() => {
    // Check the status from the Redux store
    if (status === 'idle') {
      dispatch(fetchMessages());
    }
  }, [status, dispatch]);

  const myMessages = [];

  for (let i = 0; i < messageList.length; i += 1) {
    myMessages.push(<Greeting
      id={messageList[i].id}
      text={messageList[i].text}
    />);
  }

  return (
    <div>
      Hello greetings
      {myMessages}
    </div>
  );
}
