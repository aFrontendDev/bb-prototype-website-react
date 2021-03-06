import React from 'react';
import PropTypes from 'prop-types';

import { createMarkup } from '../../helpers/helpers.js';

class Alert extends React.Component {
  render() {
    const jsonData = this.props.data;
    const ignore = this.props.ignore;

    const alertStyles = {
      warning: 'alert--warning',
      error: 'alert--error',
      success: 'alert--success',
      notice: 'alert--notice'
    };

    const alertIcons = {
      warning: 'icon--alert-warning',
      error: 'icon--alert-error',
      success: 'icon--alert-success',
      notice: 'icon--alert-notice'
    };

    return (

      <div className="flash-alerts">
        <div className="flash-alerts-inner">
          
          <div className="alert-container">

          {
            jsonData.map((item, index) => {
              const alertIcon = item.alertType ? alertIcons[item.alertType] : '';
              const alertStyle = item.alertType ? alertStyles[item.alertType] : '';
              const ignoreClass = ignore ? 'alert--ignore alert-hide-show ' : '';
              const timeout = item.timeout || false;

              return(
                <div key={index} className={"alert " + alertStyle + ' ' + ignoreClass} data-timeout={timeout}>
                  
                  <div className="alert--inner">
                    <button className="alert--dismiss" title="Close alert">
                      <span role="presentation" aria-hidden="true" className="icon icon--x"></span>
                      <span className="visually-hidden">Close Alert</span>
                    </button>				
                    <div className="alert__content">
                      <div className="alert__icon">
                        <span role="presentation" aria-hidden="true" className={"icon " + alertIcon}></span>
                      </div>
                      <div className="alert__copy">
                        <p>{item.copy}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }

          </div>

        </div>
      </div>
    )
  }
}

Alert.propTypes = {
  data: PropTypes.array.isRequired,
  ignore: PropTypes.bool
}


export default Alert;