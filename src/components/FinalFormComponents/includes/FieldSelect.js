import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';

const FieldSelect = ({ input, meta, label, options, formtext, ...rest }) => (
  <FormGroup>
    {label && <Label htmlFor={input.name}>{label}</Label>}
    <Input {...input} type="select" valid={meta.valid} invalid={meta.touched && meta.invalid} {...rest}>
      {options.map(opt => (
        <option key={opt.value} value={opt.value}>
          {opt.label}
        </option>
      ))}
    </Input>
    <FormFeedback>{meta.error}</FormFeedback>
    {formtext && <FormText>{formtext}</FormText>}
  </FormGroup>
);

FieldSelect.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      value: PropTypes.any
    })
  ).isRequired,
  label: PropTypes.string,
  formtext: PropTypes.string
};

FieldSelect.defaultProps = {
  label: null,
  formtext: null
};

export default FieldSelect;
export { FieldSelect };
