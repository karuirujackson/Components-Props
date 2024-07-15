import React from 'react';
import Avator from './Avator';
import List from './List';

function Profile() {
  return (
    <div>
        <div className="scientists">
            <h1>Notable Scientists</h1>
            <Avator 
                person={{
                    name: 'Katsuko Saruhashi',
                    imageId: 'YfeOqp2',
                    size: 150,
                    profession: 'GeoChemist',
                    awards: ['Miyake Prize for geochemistry', 'Tanaka Prize'],
                    discover: 'Discovered:  A method for measuring carbon dioxide in seawater'
                }}
            />

            <Avator 
                person={{
                    name: 'Aklilu Lemma', 
                    imageId: 'OKS67lh',
                    size: 150,
                    profession: 'Physicist and Chemist',
                    awards: [
                        'Nobel Prize in Physics',
                        'Nobel Prize in Chemistry', 
                        'Davy Medal', 
                        'Matteucci Medal'
                    ],
                    discover: 'Discovered: A natural treatment of Schistosomiasis'

                }}
            />

            <Avator 
                person={{
                    name: 'Maria Sklodowska-Curie', 
                    imageId: 'szV5sdG',
                    size: 150,
                    profession: 'Physicist and Chemist',
                    awards: ['Nobel Prize in Physics', 'Nobel Prize in Chemistry', 'Davy Medal', 'Matteucci Medal'],
                    discover: 'Discovered: Polonium (chemical element)'
                }}
            />
        </div>
        <div className="other-scientists">
        <h1>Other Notable Scientists</h1>
        <List />
        </div>
    </div>
  )
}

export default Profile;