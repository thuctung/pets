import React from 'react'
const ProductListManage = props => {
    return (
        <div className="panel panel-primary">
            <div className="panel-heading">
                <h3 className="panel-title">Product list</h3>
            </div>
            <div className="panel-body">

                <table className="table table-bordered table-hover text-center">
                    <thead>
                        <tr>
                            <th>Num</th>
                            <th>Id</th>
                            <th>Name</th>
                            <th>Price</th>
                            <th>Image</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {props.children}
                    </tbody>
                </table>

            </div>
        </div>
    )
}

ProductListManage.propTypes = {

}

export default ProductListManage
