import PropTypes from "prop-types";

function UserGreeting(props) {
  if (props.isLoggin) {
    return <h2>Welcome, {props.userName}</h2>;
  } else {
    return <h2>Please Login to proceed.</h2>;
  }
}
UserGreeting.propTypes = {
  userName: PropTypes.string,
  isLoggin: PropTypes.bool,
};
export default UserGreeting;
