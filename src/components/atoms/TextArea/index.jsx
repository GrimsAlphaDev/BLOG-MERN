import './textArea.scss';

export default function Textarea({...rest}){
    return (
            <textarea className="text-area" id="" {...rest}></textarea>
    );
}