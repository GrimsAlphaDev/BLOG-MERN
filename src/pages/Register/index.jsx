import React from 'react';
import './register.scss';
import { RegisterBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';
import { useNavigate } from 'react-router-dom';

export default function Register(){
    const navigation = useNavigate();
    return (
        <div className='main-page'>
            <div className='left'>
                <img src={RegisterBg} className='bg-image' alt='imageBg'/>
            </div>
            <div className='right'>
                <p className='title'>Register</p>
                <Input label="Full Name" placeholder="Full Name" type="text"/>
                <Gap height={18}/>
                <Input label="Email" placeholder="Email" type="email" />
                <Gap height={18}/>
                <Input label="Password" placeholder="password" type="password"/>
                <Gap height={50}/>
                <Button title='Register' to="/" />
                <Gap height={100}/>
                <Link title="Kembali ke Login" onClick={() => navigation('/login')} />
            </div>
        </div>
    );
}