import React from 'react';

export default function MergSort(props: any) {

  return (
    <div className="MergSort">
      <h1>finally</h1>

      {props.array.map( (element: number) => {
        return ( <div> {element} </div> )
        } )}

    </div> 
  );
}
