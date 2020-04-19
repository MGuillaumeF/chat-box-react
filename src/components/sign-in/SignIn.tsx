import React from 'react';

export interface ISignInProps {
}

export default function SignIn (props: ISignInProps) {
  return (
    <div className="connexionBox">
      <form className="connexion">
          <label></label>
          <input type="text" name="" id="" required placeholder="Pseudo"/>
          <button type="submit">Go</button>
      </form>
    </div>
  );
}
