import { SourceItem } from "@/data/site-data";

interface Props { items: SourceItem[]; }

export function SourcesBlock({ items }: Props) {
  return (
    <section className="section alt">
      <div className="container">
        <h2 className="h2">Sources & References</h2>
        <ul>
          {items.map((source, i) => (
            <li key={i}>
              {source.url ? (
                <a href={source.url} target="_blank" rel="noopener noreferrer">{source.title}</a>
              ) : (
                source.title
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
