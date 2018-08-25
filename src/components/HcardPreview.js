import React, { Component } from 'react';

class HcardPreview extends Component {

  render() {

    const previewLineLayout = (hCardName, label, value) => (
      <div className={`row ${hCardName}-info`}>
        <div className={`col-xs-3 preview-label ${hCardName}-label`}>
          {label}
        </div>
        <div className={`col-xs-9 preview-text ${hCardName}`}>
          {value}
        </div>
      </div>
    );

    const hcardData = this.props.hcardData;
    return (hcardData &&
      <div className="hcard-panel col-sm-6 col-xs-12 hcard-preview hcard">
        <div className="preview-container">
          <div className="preview-title">HCARD PREVIEW</div>
          <div className="preview-layout col-xs-12">
            <div
              className="avatar photo"
              style={{ backgroundImage: `url('${this.props.avatar}')` }}
            />
            <div className="row fn">
              <span className="fullname">
                {hcardData.givenName} {hcardData.familyName}
              </span>
            </div>
            {previewLineLayout(`email`, `EMAIL`, hcardData.email)}
            {previewLineLayout(`tel`, `PHONE`, hcardData.phone)}
            <div className="adr">
              {previewLineLayout(`street-address`, `ADDRESS`, `${hcardData.streetNumber || ''} ${hcardData.streetName || ''}`)}
              <div className="row locality-region-info">
                <div className="col-xs-3 preview-label address-label">
                </div>
                <div className="col-xs-9 preview-text col-offset-xs-3">
                  <span className="locality">{hcardData.suburb}</span>
                  {hcardData.state &&
                    <span>
                      ,
                      <span className="region"> {hcardData.state}</span>
                    </span>
                  }
                </div>
              </div>
              <div className="row code-country-info">
                <div className="col-xs-3 preview-label postcode-label">
                  POSTCODE
                </div>
                <div className="col-xs-3 preview-text postal-code">
                  {hcardData.postCode}
                </div>
                <div className="col-xs-3 preview-label country-label">
                  COUNTRY
                </div>
                <div className="col-xs-3 preview-text country-name">
                  {hcardData.country}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default HcardPreview;
