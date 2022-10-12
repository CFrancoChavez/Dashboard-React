import React from "react"

function Row(props) {
    const { rowData = {}, columns = [] } = props;
    return (
        <tr>
            {
                columns.map((element, i) => <td key={ element+i }> { element =="product" ? rowData[element]?.name : rowData[element] } </td>)
            }
            
        </tr>
    )
}

export default Row;