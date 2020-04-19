import * as React from 'react';

export interface IMessageProps {
    children: string,
    pseudo: string,
    isUser: Function
}

export default function Message(props: IMessageProps) {
    return (
        <p className={props.isUser(props.pseudo) ? "user-message" : "not-user-message"}>
            {props.isUser(props.pseudo) ? null : <strong>{props.pseudo} : </strong>}
            {props.children}
        </p>
    );
}
