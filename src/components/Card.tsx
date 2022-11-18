export interface Props {
    title: string;
    url: string;
    datetime: string;
}

export default function Card({title, url, datetime}: Props) {
    return (
        <tr>
            <td>
                <time dateTime={datetime}>
                    {new Date(datetime).toLocaleDateString([], {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                    })}
                </time>
            </td>
            <td>
                <a href={url}>{title}</a>
            </td>
        </tr>
    );
}
