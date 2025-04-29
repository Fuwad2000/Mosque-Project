"use client";
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { PrayerContent } from "./PrayerContent";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.success.main,
    color: theme.palette.common.white,
    fontWeight: "bold",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

export default function DailyPrayerTables() {
  return (
    <div className="grid gap-y-6 mx-auto my-5 md:grid-cols-2 gap-5">
      {PrayerContent.map((prayer, index) => (
        <TableContainer
          component={Paper}
          key={index}
          className="md:h-max overflow-x-auto"
        >
          <Table aria-label="customized table overflow-x-auto">
            <TableHead>
              <TableRow>
                <StyledTableCell align="left">{prayer.type}</StyledTableCell>
                <StyledTableCell align="center">Athan</StyledTableCell>
                <StyledTableCell align="center">Iqama</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {prayer.name.map((name, index) => (
                <StyledTableRow key={index}>
                  <StyledTableCell align="left">{name}</StyledTableCell>
                  <StyledTableCell align="center">
                    {prayer.athan[index]}
                  </StyledTableCell>
                  <StyledTableCell align="center">
                    {prayer.iqama[index]}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ))}
    </div>
  );
}
