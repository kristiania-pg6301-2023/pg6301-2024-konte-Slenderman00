import './grid.css'

function Grid(props: any) {
    return (
        <div className="grid-container">
            {props.children}
        </div>
    );
}

export default Grid;