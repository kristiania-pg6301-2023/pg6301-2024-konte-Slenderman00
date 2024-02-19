import './article.css'

export function ArticleText(props: any) {
    return (
        <div className='article'>
            {props.children}
        </div>
    )
}

export function ArticleTitle(props: any) {
    return(
        <div className='title'>
            {props.children}
        </div>
    );
}
