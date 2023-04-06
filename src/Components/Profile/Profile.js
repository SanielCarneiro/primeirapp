import React, { useContext } from 'react'
import { UserContext } from '../../Contexts/userContexts';

function Profile(){
    const {login} = useContext(UserContext);

    return (
        <div>
             {login? 'dados do usuário' : 'Faça o seu login para ter acesso as informações'}
        </div>
    )
}

export default Profile; 