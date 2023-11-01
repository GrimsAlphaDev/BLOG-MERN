import { LoginBg } from '../../../assets';
import './upload.scss';

export default function Upload()
{
    return (
        <div className='upload'>
            <img src={LoginBg} className='preview' alt="preview" />
            <input type="file" />
        </div>
    );
}