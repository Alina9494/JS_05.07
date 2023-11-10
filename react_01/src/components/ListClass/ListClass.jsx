import React, { Component } from 'react';

function getRandomRenae(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
  }

class ListClass extends Component {
    state = {
        list: this.props.list || [],
    }

    constructor(props) {
        super(props);

        const timer = setInterval(() => {
            const list = this.state.list;
            const indexList = list.reduce((returnValue, item, index) => {
              if (item.active === false) {
                returnValue.push(index);
              }
        
              return returnValue;
            }, []);
        
            if (indexList.length) {
              // [1, 2, 3]; 
              const randomIndex = getRandomRenae(0, indexList.length); // 1
              const listIndex = indexList[randomIndex]; // 2
        
              list[listIndex].active = true;
            } else {
                clearInterval(timer);
            }

            this.setState({ list });

        }, 2000);
    }

    render() {
        const { list } = this.state;
        const rows = list.map((item, index) => <tr key={index}>
        <td style={{ color: item.active ? 'green' : 'black', fontWeight: item.active ? 'bold' : 'regular' }}>
          {item.type}
        </td>
        <td>{item.icon}</td>
      </tr>) 

        return (
            <table className='styled-table'>
                <tbody>{rows}</tbody>
            </table>
        );
    }
}



export default ListClass;