import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";

const Bookings = () => {
    const { user } = useContext(AuthContext);
    const [bookings, setBookings] = useState([]);


    const url = `http://localhost:5000/bookings?email=${user.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setBookings(data);
                console.log(data);
            })
    }, [url, user]);

    return (
        <div>
            <h1>booking section</h1>
        </div>
    );
};

export default Bookings;