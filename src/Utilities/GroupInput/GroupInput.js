import React from 'react';

const GroupInput = () => {
    return (
        <div className=''>
            <details class="custom-select">

                <summary class="radios">
                    <input type="radio" name="item" id="default" title="Group Name One" checked />
                    <input type="radio" name="item" id="item1" title="Item 1" />
                    <input type="radio" name="item" id="item2" title="Item 2" />
                    <input type="radio" name="item" id="item3" title="Item 3" />
                    <input type="radio" name="item" id="item4" title="Item 4" />
                </summary>

                <ul class="list">
                    <li><label for="item1">Group Name One</label></li>
                    <li><label for="item2">Group Name One</label></li>
                    <li><label for="item3">Group Name One</label></li>
                    <li><label for="item4">Group Name One</label></li>
                </ul>

            </details>
        </div>
    );
};

export default GroupInput;