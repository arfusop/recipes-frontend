import React from "react";
import { useSelector } from "react-redux";
// import PropTypes from 'prop-types';

const Alert = () => {
  const alerts = useSelector(state => state.alerts);

  if (alerts !== null && alerts.length > 0) {
    return (
      <>
        {alerts.map(alert => (
          <div key={alert.id} className={`alert-${alert.alertType}`}>
            <span key={Math.random()}>{alert.msg}</span>
          </div>
        ))}
      </>
    );
  }
  return <div />;
};

// Alert.propTypes = {

// }

export default Alert;
