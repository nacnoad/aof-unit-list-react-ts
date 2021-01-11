import {
  Box,
  Button,
  ButtonGroup,
  makeStyles,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import React, { ReactElement, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import CheckboxSlider from '../../../components/checkboxSlider';
import { constant } from '../../../helpers/constant';
import { IUnit, IUnitCost, UnitState } from '../../../storage/unit/types';
import {
  getAllUnitStart,
  getUnitStart,
  getFilteredUnitStart,
} from '../../../storage/unit/actions';
import { RootState } from '../../../storage/reducers';
import { Link, RouteComponentProps } from 'react-router-dom';

const useStyles = makeStyles({
  active: {
    background: '#3f51b5',
    color: 'white',
    '&:hover': {
      color: '#3f51b5',
    },
  },
});

interface ICostData {
  isActive: boolean;
  min: number;
  max: number;
}
interface ICost {
  Food: ICostData;
  Wood: ICostData;
  Gold: ICostData;
}

const List = ({ history }: RouteComponentProps<any>): ReactElement => {
  const [age, setAge] = useState<string | null>('');
  const [costs, setCosts] = useState<ICost>({
    Food: {
      isActive: false,
      min: 0,
      max: 200,
    },
    Wood: {
      isActive: false,
      min: 0,
      max: 200,
    },
    Gold: {
      isActive: false,
      min: 0,
      max: 200,
    },
  });

  const units: IUnit[] = useSelector((storage: RootState) => storage.unit.units, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllUnitStart());
  }, []);

  useEffect(() => {
    dispatch(
      getFilteredUnitStart(
        age,
        Object.keys(costs)
          .filter((k) => costs[k as keyof ICost].isActive)
          .map((k) => ({
            costType: k,
            min: costs[k as keyof ICost].min,
            max: costs[k as keyof ICost].max,
          }))
      )
    );
  }, [age, costs]);

  const handleCostChange = (data: number | number[], key: string) => {
    setCosts({
      ...costs,
      [key]: {
        ...costs[key as keyof ICost],
        min: typeof data === 'object' ? data[0] : 0,
        max: typeof data === 'object' ? data[1] : 200,
      },
    });
  };
  const onCostActivityChange = (data: boolean, key: string) => {
    setCosts({
      ...costs,
      [key]: {
        ...costs[key as keyof ICost],
        isActive: data,
      },
    });
  };
  const handleAgeChange = (data: string | null) => {
    setAge(data);
  };

  const classes = useStyles();

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h1" component="h2">
          Units Page
        </Typography>
      </Box>
      <Box marginLeft={'1em'} marginY={'1em'}>
        <Typography variant="subtitle1" component="p">
          Ages
        </Typography>
        <ButtonGroup color="primary">
          <Button onClick={() => handleAgeChange('')} className={!age ? classes.active : ''}>
            {'All'}
          </Button>
          {constant.age.map((ai, index) => {
            return (
              <Button
                key={index}
                onClick={() => handleAgeChange(ai)}
                className={age === ai ? classes.active : ''}
              >
                {ai}
              </Button>
            );
          })}
        </ButtonGroup>
      </Box>
      <Box marginLeft={'1em'} marginY={'1em'}>
        <Typography variant="subtitle1" component="p">
          Costs
        </Typography>
        <Box>
          {Object.keys(costs).map((ci, index) => {
            return (
              <CheckboxSlider
                key={index}
                min={0}
                max={200}
                minVal={costs[ci as keyof ICost].min}
                maxVal={costs[ci as keyof ICost].max}
                isSliderActive={costs[ci as keyof ICost].isActive}
                text={ci}
                name={ci}
                onCostActivityChange={onCostActivityChange}
                handleCostChange={handleCostChange}
              />
            );
          })}
        </Box>
      </Box>
      <Box margin={'1em'}>
        {units && (
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="right">ID</TableCell>
                  <TableCell align="right">Name</TableCell>
                  <TableCell align="right">Age</TableCell>
                  <TableCell align="right">Costs</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {units.map((row) => (
                  <TableRow key={row.id} onClick={() => history.push(`details/${row.id}`)}>
                    <TableCell align="right">{row.id}</TableCell>
                    <TableCell align="right">{row.name}</TableCell>
                    <TableCell align="right">{row.age}</TableCell>
                    <TableCell align="right">
                      {row.cost
                        ? Object.keys(row.cost)
                            .map((key) => {
                              if (row.cost) {
                                return `${key}: ${row.cost[key as keyof IUnitCost]}`;
                              }
                            })
                            .join(',')
                        : ''}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
    </>
  );
};

export default List;
