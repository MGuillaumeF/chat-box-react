import * as React from 'react';

export interface IMessageProps {
    children : string
}

export default function Message (props: IMessageProps) {
  return (
  <p className="user-message">{props.children}</p>
  );
}
