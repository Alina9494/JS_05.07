import React, { Component } from 'react';

export default function List({list=[]}) {
    const rows = list.map((item, index) => <tr key={index}>
      <td style={{ color: item.active ? 'green' : 'black', fontWeight: item.active ? 'bold' : 'regular' }}>
        {item.type}
      </td>
      <td>{item.icon}</td>
    </tr>)

    return <table className='styled-table'>
      <tbody>{rows}</tbody>
    </table>
  }
