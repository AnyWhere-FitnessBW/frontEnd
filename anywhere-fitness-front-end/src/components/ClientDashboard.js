import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {
    getClientUserData, 
    getClientClasses, 
    
} from '../actions/clientActions';
import {logOut} from '../actions';
import { axiosWithAuth } from '../api/axiosWithAuth';

const ClientDashboard = (props) => {
/* state should have logged in client's data (including...) */ 
   // const [miles, setMiles] = useState('1');
    const [allClasses, setAllClasses] = useState([]);

    useEffect(() => {
        props.getClientUserData(props.client_id)
        props.getAllClasses(props.client_id)
       
    }, [])

    useEffect(() => {
        setAllClasses(props.all_classes)
        console.log('use effect with all classes')
    }, [props.all_classes])

    // //on change for x /
    // const handleChange = (e) => {
    //     setMiles(e.target.value)
    // }

    const handleSubmit = (e) => {
        e.preventDefault();
        axiosWithAuth()
         //   .get(`/restricted/client/${props.client_id}/dashboard?radius=${miles}&favorites=false`)
            .then(res => {
                console.log(res.data)
                setNearbyClasses(res.data)
            })
            .catch(err => console.log(err))
    }

    const handleLogOut = (e) => {
        e.preventDefault();
        props.logOut();
        props.history.push('/');
    }

    return (
        <div>
            <button onClick={handleLogOut}>Logout</button>
            <h2>Welcome, {props.name}!</h2>
            {/* <NearbyClasses /> */}
            <h3>Ready to get Fit? Here are some classes nearby you right now:</h3>
            <form onSubmit={handleSubmit}>
                <label> 
                    See classes within 
                    <select name='miles' value={miles} onChange={handleChange}> 
                        <option value={1}>0.5</option>
                        <option value={2}>1</option>
                        <option value={3}>1.5</option>
                        <option value={4}>2</option>
                        <option value={100}>50</option>
                        <option value={10000000}>Any</option>
                    </select>
                    miles of me.
                </label>  
                <button>Update List</button>
            </form>
            <div>
                {nearbyClasses.length === 0
                    ? <p>Bummer, there no classes within those miles of you.</p>
                    : nearbyTrucks.map(truck => <p key={truck.id}>{truck.truck_name} / {truck.cuisine_type}</p>)
                }
            </div>
            <section>
                <h3>Crave a fave? Here's your list of favorites:</h3>
                <div>
                    {faveTrucks.length === 0 
                        ? <p>Aw, you have no favorites right now. Check out the list below to add some.</p>
                    : faveTrucks.map(fave => {
                        console.log(fave)
                    return <p>
                        {fave.truck_name}
{/*                         <span 
                            className='add-del-button'
                            onClick={
                                (e) =>
                                props.delFaveTruck(props.client_id, fave.id)}>
                            Unfave
                        </span> */}
                    </p>
                    })
                    }
                </div>
            </section>
            <section>
                <h3>Looking for something new?</h3>
                <p>Here are the classes you have signed up for. </p>
                <div>
                    {allClasses.length === 0
                        ? <h5>Loading...</h5>
                        : allClasses.map(class => {
                            return <p>{class.class_name} / {class.something}
                                <span className='add-del-button'
                                    onClick={(e) =>
                                        props.addFaveClass(props.client_id, class.id)}>
                                    Add Fave
                                </span>
                            </p>
                           
                        })
                    }
                </div>
            </section>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        name: state.client.name,
        client_id: state.client.id,
        current_location: state.client.current_location,
        message: state.client.message,
        all_clients: state.client.allClients,
        all_trucks: state.client.allClasses,
        isLoading: state.client.isLoading,
        error: state.client.error
    }
}

export default connect(mapStateToProps,{getClientUserData, logOut, getAllClasses, addFaveClass, delFaveClass})(ClientDashboard);