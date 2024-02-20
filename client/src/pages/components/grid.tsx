import "./grid.css";

export function Grid(props: any) {
  return <div className="grid-container">{props.children}</div>;
}

export function ArticleGrid(props: any) {
  return <div className="grid-article">{props.children}</div>;
}
