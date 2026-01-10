import { cloud, film, home, man, market, steam, settings, podcast, joystickSmall } from '../assets';

export const Sidebar = () => {
  const icons = [steam, home, market, joystickSmall, film, podcast, man, cloud, settings];

  return (
    <div className="flex flex-col gap-13.5 pt-13 pl-10">
      {icons.map((icon, index) => (
        <img key={index} src={icon} alt={`sidebar-icon-${index}`} className="w-7.5 h-7.5" />
      ))}
    </div>
  );
};
