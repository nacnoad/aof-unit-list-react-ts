import React, { ReactElement } from 'react';
import { Box, Typography, Checkbox, Slider } from '@material-ui/core';

interface IPropTypes {
  isSliderActive: boolean;
  min: number;
  max: number;
  minVal: number;
  maxVal: number;
  text: string;
  name: string;
  onCostActivityChange: (data: boolean, key: string) => void;
  handleCostChange: (data: number | number[], key: string) => void;
}

const CheckboxSlider = (props: IPropTypes): ReactElement => {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100px" display="flex" justifyContent="space-between" alignItems="center">
        <Typography variant="subtitle2" component="label" style={{ textTransform: 'capitalize' }}>
          {props.text}
        </Typography>
        <Checkbox
          color="primary"
          inputProps={{ 'aria-label': 'secondary checkbox' }}
          onChange={(e) => props.onCostActivityChange(e.target.checked, props.name)}
        />
      </Box>
      {props.isSliderActive && (
        <Box width="300px" marginLeft="20px" display="flex" alignItems="center">
          <Slider
            min={props.min}
            max={props.max}
            value={[props.minVal, props.maxVal]}
            valueLabelDisplay="auto"
            aria-labelledby="range-slider"
            onChange={(e, val) => props.handleCostChange(val, props.name)}
            data-testid={'slider'}
          />
          <Box width={'50px'} marginLeft={'20px'}>
            <Typography variant="subtitle2" component="label" noWrap>
              {`${props.minVal} - ${props.maxVal}`}
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default CheckboxSlider;
