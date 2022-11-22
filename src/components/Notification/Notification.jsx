import Proptypes from 'prop-types';
const Notification = ({ message }) => {
  return <h1 style={{ textAlign: 'center' }}>{message}</h1>;
};
export default Notification;
Notification.propTypes = {
  message: Proptypes.string.isRequired,
};
