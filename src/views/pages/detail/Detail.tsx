import React, { ReactElement, useEffect } from 'react';
import {
  Box,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from '@material-ui/core';
import { RouteComponentProps, useRouteMatch } from 'react-router-dom';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../storage/reducers';
import { getUnitStart } from '../../../storage/unit/actions';
import { IUnit, IUnitCost } from '../../../storage/unit/types';

type TParams = { unitId: string };

const Detail = ({ match }: RouteComponentProps<TParams>): ReactElement => {
  const { params } = match;

  const [unit]: IUnit[] = useSelector((storage: RootState) => storage.unit.units, shallowEqual);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUnitStart(parseInt(params.unitId)));
  }, [params.unitId]);

  const renderAttributeText = (
    data: string | IUnitCost | string[] | number | undefined | null
  ): string => {
    if (!data) {
      return '';
    }

    if (data instanceof Object && !(data instanceof Array)) {
      return Object.keys(data)
        .map((key) => {
          if (data) {
            return `${key}: ${data[key as keyof IUnitCost]}`;
          }
        })
        .join(',');
    }

    return data.toString();
  };

  return (
    <>
      <Box display="flex" justifyContent="center" alignItems="center">
        <Typography variant="h1" component="h2">
          Details Page
        </Typography>
      </Box>
      {unit && (
        <Box margin="1em">
          <TableContainer component={Paper}>
            <Table size="small">
              <TableHead>
                <TableRow>
                  <TableCell align="right">Attribute</TableCell>
                  <TableCell align="right">Value</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {Object.keys(unit).map((key) => (
                  <TableRow key={key}>
                    <TableCell align="right"> {key}</TableCell>
                    <TableCell align="right">
                      {renderAttributeText(unit[key as keyof IUnit])}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Box>
      )}
    </>
  );
};

export default Detail;
