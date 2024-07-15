import React from 'react';
import utils from './utils';
import { people } from './Data';

function List() {
    const listItems = people.map(person =>
        <li key={person.id}>
             <img 
                src={utils(person)}
                alt={person.name}
            />
            <p>
                <b>{person.name}: </b> {person.profession},  is known for {person.accomplishment}
            </p>
        </li>
    )

  return (
        <div>
            {
                <ul>
                    {listItems}
                </ul> 
            }
        </div>
    )
}

export default List;