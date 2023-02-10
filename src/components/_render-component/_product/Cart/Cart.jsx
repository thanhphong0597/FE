import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { productActions } from "../../../../redux/_slice/product.slice";
import { cartAllSelector, productByIdSelector, productColor, productSize, productStocks } from "../../../../redux/_selector/selectors";
import './style.scss'

import { CountCo } from "../_component/CountCo/CountCo";
import { useState } from "react";

export const Cart = () => {
    const [products, setProducts] = useState([
        { product: "Product 1", price: 100, quantity: 1, amount: 100, action: "" },
        { product: "Product 2", price: 200, quantity: 2, amount: 400, action: "" },
    ]);

        
    const [selectAll, setSelectAll] = useState(false);
    const updateAmount = (index, quantity) => {
        let updatedProducts = [...products];
        updatedProducts[index].quantity = quantity < 1 ? 1 : quantity;
        updatedProducts[index].amount = updatedProducts[index].price * updatedProducts[index].quantity;
        setProducts(updatedProducts);
    };
    const deleteProduct = (index) => {
        let updatedProducts = [...products];
        updatedProducts.splice(index, 1);
        setProducts(updatedProducts);
    };

    const toggleChecked = (index) => {
        let updatedProducts = [...products];
        updatedProducts[index].checked = !updatedProducts[index].checked;
        setProducts(updatedProducts);
    };

    const handleSelectAll = () => {
        setSelectAll(!selectAll);
        let updatedProducts = [...products];
        updatedProducts.forEach((product) => {
            product.checked = !selectAll;
        });
        setProducts(updatedProducts);
    };
    return (
        <table className="cart_table">
            <thead>
                <tr>
                    <th className="sanpham">
                        <input type="checkbox" checked={selectAll} onChange={handleSelectAll} />
                        Sản phẩm
                    </th>
                    <th className="dongia">Đơn giá</th>
                    <th className="soluong">Số lượng</th>
                    <th className="sotien">Số tiền</th>
                    <th className="thaotac">Thao tác</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product, index) => (
                    <tr key={index}>
                        <td className="cart_table_name">
                            <p>
                                <input type="checkbox" checked={product.checked} onChange={() => toggleChecked(index)} />
                                {product.product}
                            </p>
                            <p>
                                size ne:
                            </p>

                        </td>
                        <td>{product.price}</td>
                        <td className="cart_table_quantity">
                            <button onClick={() => updateAmount(index, product.quantity - 1)}>
                                -
                            </button>
                            <p className="quantity">
                                {product.quantity}
                            </p>
                            <button onClick={() => updateAmount(index, product.quantity + 1)}>
                                +
                            </button>
                        </td>
                        <td className="center">{product.amount}</td>
                        <td className="center"> <button onClick={() => deleteProduct(index)}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}