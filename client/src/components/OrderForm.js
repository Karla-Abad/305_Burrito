import Nav from "./Nav"

const OrderForm = () => {
    return (
        <div>
            <Nav/>
            <h2>BUILD YOUR BURRITO</h2>
            <div>
                <form> 
                    <label>METHOD:</label>
                    <select>
                        <option>Pickup</option>
                        <option>Delivery</option>
                    </select>
                    <label>BURRITO TYPE:</label>
                    <select>
                        <option>Bowl</option>
                        <option>Burrito</option>
                    </select>
                    <label>QTY:</label>
                    <select>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                    <label>TOPPINGS:</label>
                    <div>
                        <button>ADD TO ORDER</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default OrderForm;