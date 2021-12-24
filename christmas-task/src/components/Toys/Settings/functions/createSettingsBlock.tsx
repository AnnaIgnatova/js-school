export const SettingsBlock = (props: {
  name: string;
  component: JSX.Element;
}) => (
  <div className={`settings-block ${props.name}`}>
    <span className="settings-block-title">{props.name}</span>
    {props.component}
  </div>
);
