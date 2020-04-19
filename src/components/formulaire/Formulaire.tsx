import React, { useState } from 'react';

export interface IFormulaireProps {
    addMessage: Function,
    pseudo: string,
    length?: number
}

export default function Formulaire(props: IFormulaireProps) {

    const [message, setMessage] = useState('');
    const { pseudo, addMessage } = props;
    const maxLength = props.length || 140
    const [length, setLength] = useState(maxLength);

    const createMessage = () => {
        const createdMessage = { pseudo, message };
        addMessage(createdMessage);
        setMessage('');
        setLength(maxLength);
    };

    const onSubmit = (event: { preventDefault: Function }) => {
        event.preventDefault();
        createMessage();
    };

    const onKeyUp = (event: { key: string }) => {
        if (event.key === 'Enter') {
            createMessage();
        }
    };

    const onChange = (event: { target: { value: string } }) => {
        setMessage(event.target.value);
        setLength(maxLength - event.target.value.length);
    };

    return (
        <form
            className="form"
            onSubmit={onSubmit}
        >
            <textarea
                value={message}
                onChange={onChange}
                required
                maxLength={maxLength}
                onKeyUp={onKeyUp}
            />
            <div className="info">{length}</div>
            <button type="submit">Send</button>
        </form>
    );
}
