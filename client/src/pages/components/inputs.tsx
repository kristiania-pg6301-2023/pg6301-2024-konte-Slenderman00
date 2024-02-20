import './inputs.css'

export function ArticleTitleInput(props: any) {
    return(
        <div className='article-input-container'>
            <input value={props.value} className='atitle' onChange={(e) => {props.callback(e.target.value)}}/>
        </div>
    )
}

export function GenericInput(props: any) {
    return(
        <div className='generic-input-container'>
            <input value={props.value} className='ageneric' onChange={(e) => {props.callback(e.target.value)}}/>
        </div>
    )
}

export function GenericInputLarge(props: any) {
    return(
        <div className='generic-input-container'>
            <textarea value={props.value} className='ageneric-large' onChange={(e) => {props.callback(e.target.value)}}/>
        </div>
    )
}

export function ArticleTextInput(props: any) {
    return(
        <div className='article-input-container'>
            <textarea value={props.value} className='atext' onChange={(e) => {props.callback(e.target.value)}}/>
        </div>
    )
}

export function ArticleCategoryInput(props: any) {
    return(
        <div className='article-input-container'>
            <select value={props.value} className='aselect' onChange={(e) => {props.callback(e.target.value)}}>
                {props.children}
            </select>
        </div>
    )
}

export function ArticleSubmit(props: any) {
    return(
        <div className='article-input-container'>
            <button value={props.value} className='abutton' onClick={props.callback}>Submit</button>
        </div>
    )
}

export function GenericSubmit(props: any) {
    return(
        <div className='generic-input-container'>
            <button value={props.value} className='abutton-generic' onClick={props.callback}>Submit</button>
        </div>
    )
}