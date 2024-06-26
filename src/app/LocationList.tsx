interface LocationListProps {
  props : string|null
}

export function LocationList(props: LocationListProps): React.JSX.Element {
  return <h1>{props.props}</h1>;
}
