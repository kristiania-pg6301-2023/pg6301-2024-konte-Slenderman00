import './inputs.css'

export function ArticleTitleInput(props: any) {
    return(
        <div className='article-input-container'>
            <input className='atitle' onChange={(e) => {props.callback(e.target.value)}}/>
        </div>
    )
}

export function ArticleTextInput(props: any) {
    return(
        <div className='article-input-container'>
            <textarea className='atext' onChange={(e) => {props.callback(e.target.value)}}/>
        </div>
    )
}

export function ArticleCategoryInput(props: any) {
    return(
        <div className='article-input-container'>
            <select className='aselect' onChange={(e) => {props.callback(e.target.value)}}>
                {props.children}
            </select>
        </div>
    )
}

export function ArticleCategorySubmit(props: any) {
    return(
        <div className='article-input-container'>
            <button className='abutton' onClick={props.callback}>Submit</button>
        </div>
    )
}