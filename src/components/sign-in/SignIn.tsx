import React, { useState } from 'react';

export interface ISignInProps {
    history: { push: Function }
}

export default function SignIn(props: ISignInProps) {
    const [pseudo, setPseudo] = useState('');
    const onChange = (event: { target: { value: string } }) => {
        setPseudo(event.target.value);
    };
    const onSubmit = (event: { preventDefault: Function }) => {
        event.preventDefault();
        props.history.push('/pseudo/' + pseudo);
    };
    return (
        <div className="connexionBox">
            <form className="connexion" onSubmit={onSubmit}>
                <label></label>
                <input type="text" value={pseudo} onChange={onChange} name="" id="" required placeholder="Pseudo" />
                <button type="submit">Go</button>
            </form>
        </div>
    );
}
