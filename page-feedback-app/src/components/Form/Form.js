import * as React from 'react';
import PropTypes from 'prop-types';
import styles from './Form.scss';
import router from '@sitevision/api/common/router';
import toasts from '@sitevision/api/client/toasts';
import requester from '@sitevision/api/client/requester';
import i18n from '@sitevision/api/common/i18n';

const Form = () => {
    const [feedback, setFeedback] = React.useState("");

    const handleFeedbackChange = (e) => {
        setFeedback(e.target.value);
    };

    const addFeedback = () => {
        requester.doPost({
            url: router.getStandaloneUrl("/addFeedback"),
            data: {
                feedback: feedback
            }
        }).then((response) => {
            toasts.publish({
                message: response.message,
                type: 'primary'
            })
        }).catch((response) => {
            alert(response.responseJSON.errorMsg);
        });
    }

    return (
        <div className={styles.container}>
            <label htmlFor="text-1" className={styles.label + " env-form-element__label"} >{i18n.get('sendFeedbackHeading')}</label>
            <div className="env-form-element__control">
                <textarea
                    type="text"
                    name="feedback"
                    className="env-form-input"
                    placeholder={i18n.get('sendFeedbackPlaceHolder')}
                    id="text-1"
                    rows="4"
                    onChange={e => handleFeedbackChange(e)}
                />
            </div>
            <p>
                <button
                    type="button"
                    className="env-button env-button--primary env-button--block"
                    onClick={addFeedback}
                >
                    {i18n.get('sendFeedbackButton')}
                </button>
            </p>
        </div>
    );
};

Form.propTypes = {
    message: PropTypes.string,
    name: PropTypes.string,
};

export default Form;
