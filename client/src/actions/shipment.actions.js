import axios from '../singletons/axios';

export const getShipments = async () => {
    const response = await axios.get('/shipments');
    console.log("THIS IS THE RESPONSE: ", response);
    return response.data;
};