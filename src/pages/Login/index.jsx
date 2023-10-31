import React from 'react';
import { LoginBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';

export default function Login(){
    return (
        <div className='main-page'>
        <div className='left'>
            <img src={LoginBg} className='bg-image' alt='imageBg'/>
        </div>
        <div className='right'>
            <p className='title'>Login</p>
            <Input label="Email" placeholder="Email" type="email" />
            <Gap height={18}/>
            <Input label="Password" placeholder="password" type="password"/>
            <Gap height={50}/>
            <Button title='Login' />
            <Gap height={100}/>
            <Link title="Belum punya akun ?, Silahkan Daftar" />
        </div>
    </div>
    );
}