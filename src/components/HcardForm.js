import React, { Component } from 'react';
import Dropzone             from 'react-dropzone';
import * as Utils           from "../core/utils";
import { Config }           from "../config";

class HcardForm extends Component {

  constructor(props) {
    super(props);
    this.state = {
      errors: {},
      submitting: false,
      created: false
    };
  }

  setDefaultState = () => {
    this.setState({
      errors: {},
      submitting: false,
      created: false
    });
  }

  validateForm = (values, requiredFields = []) => {
    let errors = Utils.validateRequiredFields(requiredFields, values);

    if (!values.email && !Utils.isEmail(values.email)) {
      errors.email = 'Invalid email address';
    }

    if (values.phone && !Utils.isMobilePhone(values.phone)) {
      errors.phone = 'Invalid Phone number';
    }

    if (values.postCode && !Utils.isPostCode(values.postCode)) {
      errors.postCode = 'Invalid Postcode';
    }

    return errors;
  }

  onInputChange = e => {
    this.setState({ errors: {} });
    this.props.onInputChange(e);
  }

  onSubmit = (e) => {
    e.preventDefault();
    if (this.state.submitting) return;
    if (document.querySelector(".hcard-builder-form") === e.currentTarget) {
      return this.setState({ submitting: false });
    }

    this.setState({submitting: true});

    let formData = {};
    let requiredFields = [];
    for (const formElement of document.querySelectorAll(".hcard-builder-form input")) {
      const elementName = formElement.name;
      if (elementName) {
        if (formElement.required) {
          requiredFields.push(elementName);
        }
        formData[elementName] = formElement.value;
      }
    }

    const errors = this.validateForm(formData, requiredFields);
    if (Object.keys(errors).length > 0) {
      return this.setState({ errors, submitting: false });
    }

    setTimeout(() => {
      this.setState({
        errors: {},
        submitting: false,
        created: true
      });
    }, Config.REQUEST_TIMEOUT);
  }

  onConfirmed = e => {
    this.setDefaultState();
    this.props.onCreatedConfirm(e);
  }

  render() {

    const formInput = (className, label, name, placeholder, errors) => (
      <div className={`col-xs-6 form-input ${className}`}>
        <h3>{label}</h3>
        <input
          required
          onChange={this.onInputChange}
          type="text"
          name={name}
          placeholder={placeholder}
        />
        {errors && errors[name] &&
          <p className="form-error fail">{errors[name]}</p>
        }
      </div>
    );

    return (
      <div className="hcard-panel col-sm-6 col-xs-12 hcard-builder">
        <div className="col-sm-12">
          <h1>hCard Builder</h1>
        </div>
        <form className="hcard-builder-form" onSubmit={this.onSubmit}>
          <div className="row col-sm-12 details">
            <div className="details-title">
              <h2>PERSONAL DETAILS</h2>
              <hr />
            </div>
            <div className="details-form">
              <div className="name">
                {formInput(`given-name`, `GIVEN NAME`, `givenName`, `Given Name`, this.state.errors)}
                {formInput(`family-name`, `SURNAME`, `familyName`, `SurName`, this.state.errors)}
              </div>
              <div className="email-phone">
                {formInput(`email`, `EMAIL`, `email`, `Email address`, this.state.errors)}
                {formInput(`tel`, `PHONE`, `phone`, `Phone number`, this.state.errors)}
              </div>
            </div>
          </div>

          <div className="row col-sm-12 address">
            <div className="address-title">
              <h2>ADDRESS</h2>
              <hr />
            </div>
            <div className="address-form">
              <div className="street-address">
                {formInput(``, `HOUSE NAME OR #`, `streetNumber`, `House name or #`, this.state.errors)}
                {formInput(``, `STREET`, `streetName`, `Street name`, this.state.errors)}
              </div>
              <div className="suburb-state">
                {formInput(`locality`, `SUBURB`, `suburb`, `Suburb`, this.state.errors)}
                {formInput(`region`, `STATE`, `state`, `State`, this.state.errors)}
              </div>
              <div className="code-country">
                {formInput(`postal-code`, `POSTCODE`, `postCode`, `Postcode`, this.state.errors)}
                {formInput(`country-name`, `COUNTRY`, `country`, `Country`, this.state.errors)}
              </div>
            </div>
          </div>

          <div className="row col-sm-12">
            <div className="col-sm-6 col-xs-6 btn-layout">
              <div className="avatar-dropzone-container">
                <Dropzone
                  multiple={false}
                  className="avatar-dropzone"
                  accept="image/*"
                  name="photo"
                  onDrop={this.props.onAvatarUploaded}
                >
                  <button className="upload-avatar-btn">
                    Upload Avatar
                  </button>
                </Dropzone>
              </div>
            </div>
            <div className="col-sm-6 col-xs-6 btn-layout" onClick={this.onSubmit}>
              <button className="create-hcard-btn" disabled={!this.props.hasAllDetails || this.state.submitting} type="submit">
                Create hCard
              </button>
              { this.state.submitting &&
                <div className="container-submitting">
                  <span className="loader">
                    <span className="spinner"></span>
                  </span>
                </div>
              }
            </div>
          </div>
        </form>

        { !this.state.submitting && this.state.created &&
          <div className="container-submitted">
            <h2 className="content-title">Congratulations!</h2>
            <h3 className="content-subtitle">Your hCard has been created successfully!</h3>
            <button className="confirmed" onClick={this.onConfirmed}>OK</button>
          </div>
        }
      </div>
    );
  }
}

export default HcardForm;
