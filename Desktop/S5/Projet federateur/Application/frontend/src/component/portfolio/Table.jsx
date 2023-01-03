import { useTable, usePagination, useFilters} from 'react-table'
import React from 'react';
import AAPL from './trading/AAPL'
import ColumnFilter from './trading/ColumnFilter';
//import {format} from 'date-fns'
 function Table() {
   //const [ticker, useTicker] = useState(AAPL)
   const data = React.useMemo(
     () => AAPL
     ,[]
   )
 
   const columns = React.useMemo(
     () => [
        {
            Header: 'Date',
            accessor: 'Date', // accessor is the "key" in the data
            Filter : ColumnFilter,
            maxWidth: 400,
            minWidth: 80,
            width: 300
          },
         {
         Header: 'Close',
         accessor: 'Close',
         Filter : ColumnFilter,
         maxWidth: 400,
            minWidth: 80,
            width: 300
       },
       {
        Header: 'High',
        accessor: 'High',
        Filter : ColumnFilter,
        maxWidth: 400,
            minWidth: 80,
            width: 300
      },
      {
        Header: 'Low',
        accessor: 'Low',
        Filter : ColumnFilter,
        maxWidth: 400,
            minWidth: 80,
            width: 300
      },
      {
        Header: 'Open',
        accessor: 'Open',
        Filter : ColumnFilter
      },
      {
        Header: 'Volume',
        accessor: 'Volume',
        Filter : ColumnFilter,
        maxWidth: 400,
            minWidth: 80,
            width: 300
      },
     ],
     []
   )
   const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    prepareRow,
  } = useTable({ columns, data }, useFilters, usePagination)

  const {pageIndex} = state;
 
   return (
    <>
     <table {...getTableProps()} style={{ border: 'solid 1px blue' }}>
       <thead>
         {headerGroups.map(headerGroup => (
           <tr {...headerGroup.getHeaderGroupProps()}>
             {headerGroup.headers.map(column => (
               <th
                 {...column.getHeaderProps()}
                 style={{
                   borderBottom: 'solid 1px red',
                   background: 'aliceblue',
                   color: 'black',
                   fontWeight: 'bold'
                 }}
               >
                 {column.render('Header')}
                 <div>
                 {column.canFilter ? column.render('Filter') : null }
                 </div>
               </th>
             ))}
           </tr>
         ))}
       </thead>
       <tbody {...getTableBodyProps()}>
         {page.map(row => {
           prepareRow(row)
           return (
             <tr {...row.getRowProps()}>
               {row.cells.map(cell => {
                 return (
                   <td
                     {...cell.getCellProps()}
                     style={{
                        padding: '2px',
                        border: 'solid 1px gray',
                        background: 'papayawhip',
                     }}
                   >
                     {cell.render('Cell')}
                   </td>
                 )
               })}
             </tr>
           )
         })}
       </tbody>
     </table>
     <span>
        Page{' '}
        <strong>
            {pageIndex+1} of {pageOptions.length}
        </strong>{' '}
     </span>
     <div>
        <button onClick={()=>nextPage()} disabled={!canNextPage}>Next</button>
        <button onClick={()=>previousPage()} disabled={!canPreviousPage}>Previous</button>
     </div>
     </>
   )
 }

 export default Table;