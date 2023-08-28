import classes from "./PageContent.module.scss"

interface Props {
    title: string
    children: React.ReactNode | React.ReactElement
}

export default function PageContent({title, children}: Props) {
    return(
        <div className={classes.content}>
            <h1>{title}</h1>
            {children}
        </div>
    )
}