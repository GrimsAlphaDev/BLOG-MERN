import React from 'react';
import './register.scss';
import { RegisterBg } from '../../assets';
import { Button, Input, Gap, Link } from '../../components';

export default function Register(){
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
                <Button title='Register' />
                <Gap height={100}/>
                <Link title="Kembali ke Login" />
            </div>
        </div>
    );
}