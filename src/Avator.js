import React from 'react';
import utils from './utils';

function Avator({ person, size, profession, awards, discover }) {
  return (
    <div>
        <img
            className="avatar"
            src={utils(person)}
            alt={person.name}
            width={size}
            height={size}
        />
        <h3>{person.name}</h3>
        <ul>
            <li>
                <b>Profession:</b> {person.profession}
            </li>
            <li>
                <b>Awards: {person.awards.length}</b> ({person.awards})
            </li>
            <li>
                <b>Discovered:</b> {person.discover}
            </li>
        </ul>      
    </div>
  )
}

export default Avator;