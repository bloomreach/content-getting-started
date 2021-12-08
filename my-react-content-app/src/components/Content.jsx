export function Content({component, page}) {

    const document = page.getDocument();

    const {title, content, introduction} = document.getData();

    return (
        <div>
            <h1>{title}</h1>
            <p>{introduction}</p>
            <div dangerouslySetInnerHTML={{__html: content.value}}/>
        </div>
    );
}