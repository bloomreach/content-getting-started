export function Banner({component, page}) {

    const content = component.getContent(page);

    return (
        <div style={{backgroundColor: "grey", padding: '10px'}}>
            <h2>{content.title}</h2>
            <div dangerouslySetInnerHTML={{__html: content.text.value}}/>
            <img src={page.getContent(content.image).getOriginal().getUrl()}/>
            <p><a href={page.getContent(content.ctalink).getUrl()}>{content.ctalabel}</a></p>
        </div>
    );
}