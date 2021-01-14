import React from 'react';

function SearchControl(props) {
    return (
        <div className="container-fluid search-control" >
            <div className="row">
                <input type="text" class="form-control" placeholder="Từ khóa, Đường, Quận hoặc địa danh" />
            </div>
        </div>
    );
}

export default SearchControl;