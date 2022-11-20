export interface Props {
    title: string;
    url: string;
    datetime: string;
}

export default function Card({title, url, datetime}: Props) {
    return (
        <tr className="text-sm md:text-base">
            <td className="whitespace-nowrap align-top">
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
