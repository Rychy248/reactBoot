// local imports
import { Div, H, Span } from "../tagsComponents"

export default function SectionTitle({title, subtitle, className="section-title"}) {
  return (
    <Div className={className}>
      <H level={2} >{title} <Span>{subtitle}</Span></H>
    </Div>
  );
};