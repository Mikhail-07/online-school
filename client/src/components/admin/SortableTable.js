import React from 'react'
import { Card, Table } from 'react-bootstrap'
import ModalWindow from './ModalWindow';
import { observer } from 'mobx-react-lite';

const SortableTable = observer (({name, arr, headerConfig, children}) => {
  console.log(arr)
  if (arr.length<0) return
  const cells = headerConfig.map(({id, template}) => {
    return {
      id,
      template
    };
  });

  return (
    <>
      <Card className='d-block h-100 py-2 mb-4'>
        <h4 className='px-2'>{name}</h4>
        <Table striped bordered hover responsive className='p-2 d-block'>
          <thead>
            <tr className='py-2'>
              <th>
                <span>#</span>
              </th>
              {headerConfig.map(item =>
                <th key={item.id} >
                  <span>
                    {item.title}
                  </span>
                </th>
              )}
            </tr>
          </thead>
          
          <tbody>
            {arr.map((item, idx) =>
            children

            ?
            <ModalWindow key={item.id} id={item.id}> 
              <tr>
                <td className='py-2'>
                  <span>{idx+1}</span>
                </td>
                {cells.map(({ id, template }) => 
                  <td key={id} className='py-2'>
                    <span>
                    {template
                    ? template(item[id])
                    : item[id]
                    }
                    </span>
                  </td>
                )}
              </tr>
              {children}
            </ModalWindow>

            :
              <tr key={item.id}>
                <td className='py-2'>
                  <span>{idx+1}</span>
                </td>
                {cells.map(({ id, template }) => 
                  <td key={id} className='py-2'>
                    <span>
                    {template
                    ? template(item[id])
                    : item[id]
                    }
                    </span>
                  </td>
                )}
              </tr>
            )}
            
              
          </tbody>
        </Table>
      </Card>
    </>
  )
})

export default SortableTable