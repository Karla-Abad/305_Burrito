import Nav from "./Nav";


const UpdateAccount = () => {
    return(
        <div>
            <Nav/>
            <h2>Account Info</h2>
            <div>
                <form>
                    <label>First Name:</label>
                    <input type="text" />
                    <label>Last Name:</label>
                    <input type="text" />
                    <label>Address:</label>
                    <input type="text" />
                    <label>City:</label>
                    <input type="text" />
                    <label>State:</label>
                    <select>
                        <option>Select a state</option>
                        <option>FL</option>
                        <option>NY</option>
                        <option>AL</option>
                        <option>CA</option>
                        <option>TX</option>
                    </select>
                    <div>
                        <button>UPDATE</button>
                    </div>
                </form>
            </div>
            <div>
                <h2>Past Orders</h2>
            </div>
        </div>
    )
}

export default UpdateAccount;