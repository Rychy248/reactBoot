# FormGen Component

The `FormGen` component is used to generate dynamic forms based on the provided `formInputs` object. It allows you to create single-input fields and groups of input fields.

## Props

- `formInputs` (Object): An object that defines the inputs for the form.

  ### `formInputs.single` (Array)

  An array of single-input field configurations.

  Each configuration object should have the following properties:

  - `state` (Function): The state variable for the input value.
  - `setState` (Function): The state setter function.
  - `className` (String): Additional CSS class for styling.
  - `type` (String): The input type (e.g., "text").
  - `name` (String): The input name.
  - `placeholder` (String): The input placeholder.

  ### `formInputs.groups` (Array)

  An array of input field groups. Each group can have a title and a set of properties.

  Each group object should have the following properties:

  - `groupTitle` (String): The title of the group.
  - `groupId` (String): An identifier for the group.
  - `propertiesForInputs` (Object): Additional properties for the group's input fields.

- `formHandler` (Function): The callback function to be executed when the form is submitted.

## Example

```javascript
import FormGen from './FormGen';

const App = () => {
  // Define the form inputs
  const formInputs = {
    single: [
      {
        state: state,
        setState: setState,
        className: "",
        type: "text",
        name: "input-1",
        placeholder: "Enter something",
      },
    ],
    groups: [
      {
        groupTitle: "Group 1",
        groupId: "group-1",
        propertiesForInputs: { key: "value" },
        inputs: [
          {
            state: groupState,
            setState: setGroupState,
            className: "",
            type: "text",
            name: "group-input-1",
            placeholder: "Enter something",
          },
        ],
      },
    ],
  };

  // Define the form submit handler
  const formHandler = (e) => {
    // Handle form submission
  };

  return (
    <FormGen formInputs={formInputs} formHandler={formHandler} />
  );
};
