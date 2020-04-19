import React from 'react';

export interface IError404Props {
}

export default function Error404(props: IError404Props) {
    return (
        <div>
            <h2 className="notFound">Error 404</h2>
            <h3>Page not Found</h3>
        </div>
    );
}
