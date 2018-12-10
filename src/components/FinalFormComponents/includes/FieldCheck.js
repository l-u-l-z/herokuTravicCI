import React from 'react';
import PropTypes from 'prop-types';
import { FormGroup, Label, Input } from 'reactstrap';

const FieldCheck = ({ input, meta, label, type, ...rest }) => (
  <FormGroup check>
    <Label check>
      <Input {...input} type={type} {...rest} />
      {label}
    </Label>
  </FormGroup>
);

FieldCheck.propTypes = {
  input: PropTypes.objectOf(PropTypes.any).isRequired,
  meta: PropTypes.objectOf(PropTypes.any).isRequired,
  type: PropTypes.string,
  label: PropTypes.string
};

FieldCheck.defaultProps = {
  type: 'checkbox',
  label: null
};

export default FieldCheck;
export { FieldCheck };
