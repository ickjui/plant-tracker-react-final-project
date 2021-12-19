import React, { Component } from "react";
import { CreatableSelect, OptionType, ValueType } from "@atlaskit/select";

const defaultOptions = [
  { label: "Full sun", value: "fullSun" },
  { label: "Part sun", value: "partSun" },
  { label: "Bright indirect", value: "brightIndirect" },
  { label: "Shade", value: "shade" }
];

const createOption = (label: string) => ({
  label,
  value: label.toLowerCase().replace(/\W/g, "")
});

interface State {
  isLoading: boolean;
  options: Array<{ label: string, value: string }>;
  value?: ValueType<OptionType>;
}

export default class CreatableAdvanced extends Component<{}, State> {
  state: State = {
    isLoading: false,
    options: defaultOptions,
    value: undefined
  };

  handleChange = (newValue: any, actionMeta: any) => {
    console.group("Value Changed");
    console.log(newValue);
    console.log(`action: ${actionMeta.action}`);
    console.groupEnd();
    this.setState({ value: newValue });
  };

  handleCreate = (inputValue: any) => {
    // We do not assume how users would like to add newly created options to the existing options list.
    // Instead we pass users through the new value in the onCreate prop
    this.setState({ isLoading: true });
    console.group("Option created");
    console.log("Wait a moment...");
    const { options } = this.state;
    const newOption = createOption(inputValue);
    console.log(newOption);
    console.groupEnd();
    this.setState({
      isLoading: false,
      options: [...options, newOption],
      value: newOption
    });
  };

  render() {
    const { isLoading, options, value } = this.state;
    return (
      <>
        <label htmlFor="createable-select-example">☀️ Sun preference</label>
        <CreatableSelect
          inputId="createable-select-example"
          isClearable
          isDisabled={isLoading}
          isLoading={isLoading}
          onChange={this.handleChange}
          onCreateOption={this.handleCreate}
          options={options}
          value={value}
        />
      </>
    );
  }
}
