export function Banner({component, page}) {

    const content = component.getContent(page);
    const properties = component.getProperties();

    return (
        <div style={{backgroundColor: properties['background-color'], padding: `${properties.padding}px`, textAlign: properties.alignment, minWidth:'100px'}}>
            <h2>{content.title}</h2>
            <div dangerouslySetInnerHTML={{__html: content.text.value}}/>
            <img src={page.getContent(content.image)?.getOriginal()?.getUrl()}/>
            <p><a href={page.getContent(content.ctalink)?.getUrl()}>{content.ctalabel}</a></p>
        </div>
    );
}