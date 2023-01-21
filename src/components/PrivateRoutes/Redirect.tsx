import { FC } from "react";
import { Navigate } from 'react-router-dom';

type props = {
    redirectUrl: string
}

const Redirect: FC<props> = props => {
    const { redirectUrl } = props
    return <Navigate to={redirectUrl} />
}

export default Redirect;