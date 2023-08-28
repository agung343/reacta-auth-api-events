import "./Input.module.scss";

interface Props {
    method: "input" | "textarea";
    id: string;
    label:string;
    type?: string
    defaultValue?: string
}

export default function Input({method ,id, label, type, defaultValue}: Props) {
    return(<>
    {method === "input" && (
        <p>
            <label htmlFor={id}>{label}</label>
            <input id={id} name={id} type={type} required 
             defaultValue={defaultValue}
            />
        </p>
    )}

    {method === "textarea" && (
        <p>
            <label htmlFor={id}>{label}</label>
            <textarea id={id} name={id} rows={5} required
             defaultValue={defaultValue}
            />
        </p>
    )}
        
    </>)
}