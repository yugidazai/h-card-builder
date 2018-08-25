import React, { Component } from 'react';
import HcardForm            from "../../components/HcardForm";
import HcardPreview         from "../../components/HcardPreview";
import defaultAvatar        from "../../assets/img/default_avatar.png";

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      hasAllDetails: false,
      hcardData: {},
      avatar: defaultAvatar
    };
  }

  setDefaultState = () => {
    this.setState({
      hasAllDetails: false,
      hcardData: {},
      avatar: defaultAvatar
    });
  }

  getHcardBuilderForm = () => document.querySelectorAll(".hcard-builder-form input")

  checkAllDetails = () => {
    for (const inputElement of this.getHcardBuilderForm()) {
      if (inputElement.required && !inputElement.value) return false;
    }
    return true;
  }

  onInputChange = e => {
    // Update hCard Preview data
    let hcardData = this.state.hcardData;
    hcardData[e.target.name] = e.target.value;
    this.setState({
      hcardData: hcardData,
      hasAllDetails: this.checkAllDetails()
    });
  }

  onAvatarUploaded = (filesToUpload, e) => {
    this.setState({
      avatar: filesToUpload[0].preview
    });
  }

  onCreatedConfirm = e => {
    this.setDefaultState();
  }

  render() {
    return (
      <div className="app">
        <HcardForm
          hasAllDetails={this.state.hasAllDetails}
          onInputChange={this.onInputChange}
          onAvatarUploaded={this.onAvatarUploaded}
          onCreatedConfirm={this.onCreatedConfirm}
        />

        <HcardPreview
          hcardData={this.state.hcardData}
          avatar={this.state.avatar}
        />

      </div>
    );
  }
}

export default Home;
