import React from "react";
import { connect } from "react-redux";
import { Field } from "redux-form";

import { fetchQuestions } from "../actions";
import { Radio, RadioGroup, Stack, Heading } from "@chakra-ui/react"
class Question extends React.Component {
  constructor(props) {
    super(props);
  }

  renderInput = (props) => {
    return (
      <div className="field">
        <input
          style={{ width: `${props.width}` }}
          {...props.input}
          type={props.type}
          autoComplete="off"
        />
        <a className="option">{props.option}</a>
        <br />
      </div>
    );
  };

  renderQuestion = () => {
    if (!this.props.question) 
      return <div>Loading...</div>;

    let name = "ans" + this.props.question._id;
    return (
      <div className="item" key={this.props.seq}>
        {/* <i className="large middle aligned icon question" /> */}
        <div className="content">
          <div id="question">
            <Heading color="#303030">Q{this.props.sno}.  {this.props.question.q1}</Heading>
            {/* <h4 className="main-question" >
              <pre style={{whiteSpace: "pre-wrap"}}>Q{this.props.sno}.  {this.props.question.q1}</pre>
            </h4> */}
            <br />
          </div>
          <div>
            <b>
          {/* <RadioGroup>
          <Stack spacing={5} >
          <Radio option={this.props.question.o1} name={name}  colorScheme="green" value="A">
         <Heading color="gray.600" size="md" > {this.props.question.o1} </Heading>
          </Radio>
          <Radio option={this.props.question.o2} name={name} colorScheme="green" value="B">
          <Heading color="gray.600" size="md" >  {this.props.question.o2}</Heading>
          </Radio>
          <Radio option={this.props.question.o3} name={name} colorScheme="green" value="C">
          <Heading color="gray.600" size="md" > {this.props.question.o3}</Heading>
          </Radio>
          <Radio option={this.props.question.o4} name={name} colorScheme="green" value="D">
          <Heading color="gray.600" size="md" > {this.props.question.o4}</Heading>
          </Radio>
          </Stack>
          </RadioGroup> */}
              <Field
                id={name}
                name={name}
                component={this.renderInput}
                type="radio"
                value="A"
                width="5vw"
                option={this.props.question.o1}
              />
              <Field
                id={name}
                name={name}
                component={this.renderInput}
                type="radio"
                value="B"
                width="5vw"
                option={this.props.question.o2}
              />
              <Field
                id={name}
                name={name}
                component={this.renderInput}
                type="radio"
                value="C"
                width="5vw"
                option={this.props.question.o3}
              />
              <Field
                name={name}
                component={this.renderInput}
                type="radio"
                value="D"
                width="5vw"
                option={this.props.question.o4}
              />
            </b>
            <br />
          </div>
        </div>
      </div>
    );
  };

 

  render() {
    if(!this.props.isSignedIn)
      return <></>;
      
    return (
      <>
        <div className="col-sm-9">
          {this.renderQuestion()}
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isSignedIn: state.auth.isSignedIn
  };
};

export default connect(mapStateToProps, { fetchQuestions })(Question);
