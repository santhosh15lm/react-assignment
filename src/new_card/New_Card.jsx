import React from "react";
import Card from "react-credit-cards";
import { addcardActions } from "_store";
import SupportedCards from "./Cards";
import {connect} from 'react-redux';
import {
  formatCreditCardNumber,
  formatCVC,
  formatExpirationDate,
  formatFormData
} from "./utils";

import "react-credit-cards/es/styles-compiled.css";

class New_Card extends React.Component {
  state = {
    number: "",
    name: "",
    expiry: "",
    cvc: "",
    issuer: "",
    focused: "",
    formData: null
  };

  
  // add_card(){
  //   const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
  //   console.log("coming here");
  //   const {dispatch} = this.props;
  //   dispatch(addcardActions.add_card(name, expiry,name,number,issuer));
  //   console.log("dispatch called");
  // }

  handleCallback = ({ issuer }, isValid) => {
    if (isValid) {
      this.setState({ issuer });
    }
  };

  handleInputFocus = ({ target }) => {
    this.setState({
      focused: target.name
    });
  };

  handleInputChange = ({ target }) => {
    if (target.name === "number") {
      target.value = formatCreditCardNumber(target.value);
    } else if (target.name === "expiry") {
      target.value = formatExpirationDate(target.value);
    } else if (target.name === "cvc") {
      target.value = formatCVC(target.value);
    }

    this.setState({ [target.name]: target.value });
  };

  handleSubmit = e => {
    
    e.preventDefault();
    //const { issuer } = this.state;
    const formData = [...e.target.elements]
      .filter(d => d.name)
      .reduce((acc, d) => {
        acc[d.name] = d.value;
        return acc;
      }, {});

    this.setState({ formData });
    this.form.reset();
    
    //this.add_card();
    this.props.addcard(formData)
  };
  
  render() {
    const { name, number, expiry, cvc, focused, issuer, formData } = this.state;
    
    return (
      <div key="Payment">
        <div className="App-payment">
          <h1>Please Enter Card Details.</h1>
          
          <Card
            number={number}
            name={name}
            expiry={expiry}
            cvc={cvc}
            focused={focused}
            callback={this.handleCallback}
          />
          <form ref={c => (this.form = c)} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <input
                type="tel"
                name="number"
                className="form-control"
                placeholder="Card Number"
                pattern="[\d| ]{16,22}"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
              <small>E.g.: 49..., 51..., 36..., 37...</small>
            </div>
            <div className="form-group">
              <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Name"
                required
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </div>
            <div className="row">
              <div className="col-6">
                <input
                  type="tel"
                  name="expiry"
                  className="form-control"
                  placeholder="Valid Thru"
                  pattern="\d\d/\d\d"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
              <div className="col-6">
                <input
                  type="tel"
                  name="cvc"
                  className="form-control"
                  placeholder="CVC"
                  pattern="\d{3,4}"
                  required
                  onChange={this.handleInputChange}
                  onFocus={this.handleInputFocus}
                />
              </div>
            </div>
            <input type="hidden" name="issuer" value={issuer} />
            <div className="form-actions">
              <button className="btn btn-primary btn-block">Add Card</button>
            </div>
          </form>
          {formData && (
            <div className="App-highlight">
              {formatFormData(formData).map((d, i) => (
                <div key={i}>{d}</div>
              ))}
            </div>
          )}
          <hr style={{ margin: "60px 0 30px" }} />
          {/* <div className="App-badges">
            <a
              href="https://github.com/amarofashion/react-credit-cards"
              className="github__btn"
            >
              <img
                alt="View on GitHub"
                src="https://cdn.jsdelivr.net/gh/gilbarbara/logos@2017.12/logos/github-icon.svg"
              />
              <span>View on GitHub</span>
            </a>

            <a href="https://codesandbox.io/s/ovvwzkzry9">
              <img
                alt="Edit ovvwzkzry9"
                src="https://codesandbox.io/static/img/play-codesandbox.svg"
              />
            </a>
          </div> */}
          {/* <hr style={{ margin: "30px 0" }} /> */}
          <SupportedCards />
        </div>
        {/* <div className="App-credits">
          Made with ❤️ at <a href="https://amaro.com/">AMARO</a>.
        </div> */}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) =>{
  return {

    addcard : (props) => {
      console.log('comming here name',props.name,'expirty',props.expiry);
      dispatch(addcardActions.add_card({name : props.name, cardExpiration : props.expiry, cardHolder : props.name, cardNumber : props.number, category : "VISA"}))
  }
}
}

export default connect(null, mapDispatchToProps)(New_Card)