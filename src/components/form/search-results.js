import React from "react"
import styled from 'styled-components'

const Table = styled.table`
	width: 70%;
	td {
		text-align: left;
		padding: 12px;
		padding-left: 30px;
		background-color: #ffffff;
		border: 1px solid #cccccc;
		border-radius: 20px;
		table {
			justify-self: center;
			td {
				border: 1px solid black;
				border-radius: 0px;
				text-align: left;
				padding: 14px;
			};
			td:nth-child(even) {
				background-color: #fff7f7;
			}
		}
	}

`

export const SearchResultsTable = ({ data }) => {

  	return (
    	<div className="results">
      		<Table>
        		<tbody>
        			{ data }
    			</tbody>
      		</Table>
		</div>
  	);
}


