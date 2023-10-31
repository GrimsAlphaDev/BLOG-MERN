import './input.scss';

export default function Input({label, ...rest}) {
    return (
        <div className="input-wrapper">
            <p className="label">{label}</p>
            <input className="input" {...rest} />
        </div>
    );
}
