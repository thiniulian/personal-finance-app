import "./entityListItem.scss";

interface EntityListItemProps {
  entityVisual: string;
  entityTitle: string;
}
export default function EntityListItem({
  entityVisual,
  entityTitle,
}: EntityListItemProps) {
  return (
    <div className="entityItem">
      <img className="entityVisual" src={entityVisual} alt={entityTitle} />
      <span className="entityTitle">{entityTitle}</span>
    </div>
  );
}
