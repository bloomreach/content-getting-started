import {BrManageContentButton} from "@bloomreach/react-sdk";

export function SharedBanner({component, page}) {

    const properties = component.getProperties();
    const content = properties.document && page.getContent(properties.document)?.getData();

    if (!content) {
        return <p>No Banner reference set</p>
    }

    return (
        <div style={{backgroundColor: "grey", padding: '10px', position: 'relative'}}>
            <BrManageContentButton content={page.getContent(properties.document)}/>
            <h2>{content.title}</h2>
            <div dangerouslySetInnerHTML={{__html: content.text.value}}/>
            <img src={page.getContent(content.image).getOriginal().getUrl()}/>
            <p><a href={page.getContent(content.ctalink).getUrl()}>{content.ctalabel}</a></p>
        </div>
    );
}