export function MyComponent({component, page}) {

    const {title, showTitle} = component.getParameters();

    return (
        <div>
            <p>Title here below:</p>
            <h2>{showTitle && title}</h2>
        </div>
    );
}