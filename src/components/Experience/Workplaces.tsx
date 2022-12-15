import { workplaces } from '../../lib/date';
import Workplace from './Workplace';

export default function Workplaces() {
  return (
    <div
      className={
        'flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory  sm:overflow-x-hidden section-container sm:w-full justify-between space-x-8 lg:space-x-16'
      }
    >
      {workplaces.map(({ time, job, description, image, name }) => (
        <Workplace
          image={image}
          time={time}
          description={description}
          job={job}
          name={name}
          key={job}
        />
      ))}
    </div>
  );
}
