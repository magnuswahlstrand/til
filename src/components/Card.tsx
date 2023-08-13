export interface Props {
    title: string;
    url: string;
    datetime: string;
}

export default function Card({title, url, datetime}: Props) {
    const date = new Date(datetime)
    let day = date.getDate().toString()
    let month = date.toLocaleString('default', {month: 'short'});
    let year = date.getFullYear();

    const padding = day.length == 1 && <span className="text-white">0</span>

    return (
        <tr className="text-sm md:text-base">
            <td className="whitespace-nowrap align-top font-mono">
                <time dateTime={datetime}>
                    {day}{padding} {month} {year}
                </time>
            </td>
            <td>
                <a href={url}>{title}</a>
            </td>
        </tr>
    );
}
