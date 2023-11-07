import './upload.scss';

export default function Upload({img, ...rest})
{
    return (
        <div className='upload'>
            
            {img && <img src={img} className='preview' alt="preview" />}
            <input type="file" {...rest} />
        </div>
    );
}