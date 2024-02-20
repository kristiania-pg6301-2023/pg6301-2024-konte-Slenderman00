import './authorSection.css';

import { RoundImage } from './rouncImage';

export function AuthorSection(props: any) {
    return (
        <div className="authorContainer">
            <RoundImage src={props.picture}/>
            <div className='content'>
                <div className='name'>
                    {props.name}
                </div>
                <div className='bio'>
                    {props.bio}
                </div>
            </div>
        </div>
    )
}