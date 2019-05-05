import React from 'react';
import './style.css';
import 'tachyons';

function Header(){

    return(
        <div >
            <div className='headers'>
            <h1>
            2020 1ST S2C2IT , Bangalore
            </h1>
            <p className='headers1'>
                2ND - 3RD  JANUARY  2020
                VENUE: BMSIT&M COLLEGE , YELAHANKA
            </p>

            </div>
           
            <div>
                <div>
                    <h2>
                        Call For Papers
                    </h2>
                    <p>
                        The theme for 1ST S2C2IT 2020 is ........
                        Engineers will be brought together from academia and industry,
                         and they will freely expose their ideas and
                          opinions on emerging issues in the field of 
                          electrical, electronics and computer engineering 
                          as well as information technologies.
                          </p>

                </div>
                <div>
                    <h2>
                        Important Dates
                    </h2>
                    <p>
                    FULL Paper submission HARD deadline:  14th Jan 2019 
                    Notification of acceptance date: 25 dec 2018
                    Early Bird Dates: X/y/X
                    </p>

                </div>
                <div>
                    <h2>
                        Paper Submission
                    </h2>
                    <p>
                    For paper submission guidelines, instructions and template, please  
                     >click Here The papers need to be submitted online, where they will be reviewed,
                      and the decisions and reviewers comments would be sent to the corresponding author. 
                    The maximum paper length is 7 pages. Authors with more than 5 pages papers should pay more
                    </p>

                </div>
            </div>

        </div>
    )
}

export default Header;