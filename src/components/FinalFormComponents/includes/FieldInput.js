import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback } from 'reactstrap';

const FieldInput = ({ input, meta, label, ...rest }) => (
  <FormGroup>
    {label && <Label htmlFor={input.name}>{label}</Label>}
    <Input {...input} valid={meta.valid} invalid={meta.touched && meta.invalid} {...rest} />
    <FormFeedback>{meta.error}</FormFeedback>
  </FormGroup>
);

FieldInput.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
  label: PropTypes.string
};

FieldInput.defaultProps = {
  label: null
};

export default FieldInput;
export { FieldInput };
