import PropTypes from 'prop-types';

const Statistics = ({ stats }) => {
  return (
    <ul>
      {stats.map(({ id, label, percentage }) => {
        return (
          <li key={id}>
            <span>{label}</span>
            <span>{percentage} %</span>
          </li>
        );
      })}
    </ul>
  );
};

Statistics.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Statistics;
