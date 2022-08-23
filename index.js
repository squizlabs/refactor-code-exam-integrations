/* 
  A set of functions that perform various operations using the Petstore API from Swagger.
  API Doc at: https://petstore3.swagger.io/
*/

const axios = require('axios');

const PETSTORE_API_DOMAIN = 'https://petstore3.swagger.io/api/v3';
const PET_ENDPOINT = 'pet';
const FIND_BY_STATUS_ENDPOINT = 'findByStatus';

/**
 * Retrieves the data about a pet by it's ID
 * @param {Integer} petId - The ID of the pet, should be a whole number
 * 
 * @example node -e 'require("./index.js").getPetById(10);'
 * 
 * @return {Object} - The data about the pet
 */
module.exports.getPetById = async function getPetById(petId) {
  // first, check that the petId exists and is a valid value (an integer)
  if(!isNullOrUndefinedOrEmpty(petId) && Number.isInteger(petId)){
    try {
      const petEndpoint = `${PETSTORE_API_DOMAIN}/${PET_ENDPOINT}`;
      console.log(`Calling ${petEndpoint} with petId ${petId}`);

      // now, call the API passing the petId as a path parameter and store the reply in the response variable
      const response = await axios.get(`${petEndpoint}/${petId}`)
      console.log('Logging response data:');
      console.log(response.data);
      return response.data;
    } catch (error) {
      // error handler
      console.log(`Error occurred: ${error.code}`)
      throw error;
    }
  } else {
    // handle an invalid ID by logging and throwing an error
    console.log(`Invalid ID entered: ${petId}`)
    throw new Error('Invalid Pet ID');
  }
}

// call the API to get a pet
module.exports.callTheAPI = async function callTheAPI(x) {
  if(x !== null && x != undefined && x != ''){
    let y = await axios.get('https://petstore3.swagger.io/api/v3/pet/' + x);
    console.log(y);
    return y;
  }
}

/**
 * Retrieves the data about all pets with a given status
 * @param {String} status - The status to retrieve pets for, should be a String
 * 
 * @example node -e 'require("./index.js").getPetsByStatus("available");'
 * 
 * @return {Object} - The list of pets
 */
 module.exports.getPetsByStatus = async function getPetsByStatus(status) {
  // first, check that the status exists and is a valid value (a string)
  if(!isNullOrUndefinedOrEmpty(status) && typeof status === 'string'){
    try {
      const petEndpoint = `${PETSTORE_API_DOMAIN}/${PET_ENDPOINT}/${FIND_BY_STATUS_ENDPOINT}`;
      console.log(`Calling ${petEndpoint} to get pets with status ${status}`);

      // now, call the API passing the status as a query parameter and store the reply in the response variable
      console.log(`${petEndpoint}?status=${status}`)
      const response = await axios.get(`${petEndpoint}?status=${status}`)
      console.log('Logging response data:');
      console.log(response.data);
      return response.data;
    } catch (error) {
      // error handler
      console.log(`Error occurred: ${error.code}`)
      throw error;
    }
  } else {
    // handle an invalid status by logging and throwing an error
    console.log(`Invalid status entered: ${status}`)
    throw new Error('Invalid Status');
  }
}

/**
 * Creates a new Pet in the store
 * @param {Integer} petId - The ID of the pet, should be a whole number
 * @param {String} name - the new pet's name
 * @param {String} status - status of the new pet
 * @param {Object} category - the category to which the pet belongs
 * @param {Array} tags - list of tags to be associated with the pet
 * 
 * @example node -e 'require("./index.js").createPet(1234, "Doug", "available", {"id": 1, "name": "Dogs"}, [{"id": 0, "name":"myPets"}, {"id": 1, "name":"myDogs"} ]);'
 * 
 * @return {Object} - The data about the newly created pet
 */
 module.exports.createPet = async function createPet(petId, name, status, category, tags) {
  // first, check that the required values exist and are valid (the API only cares about ID, all other values can be empty)
  if(!isNullOrUndefinedOrEmpty(petId) && Number.isInteger(petId) ){
    try {
      // build the request body object
      const requestBody = {
        id: petId,
        name,
        status,
        category, 
        tags
      }
      const petEndpoint = `${PETSTORE_API_DOMAIN}/${PET_ENDPOINT}`;
      console.log(`POSTing to ${petEndpoint} to createw pet with id ${petId}`);
      console.log(`Request body: ${JSON.stringify(requestBody)}`);

      //now, call the API and store the reply in the response variable
      const response = await axios.post(`${petEndpoint}`, requestBody)
      console.log('Logging response data:');
      console.log(response.data);
      return response.data;
    } catch (error) {
      // error handler
      console.log(`Error occurred: ${error.code}`)
      throw error;
    }
  } else {
    // handle an invalid ID by logging and throwing an error
    console.log(`Invalid ID entered: ${petId}`)
    throw new Error('Invalid Pet ID');
  }
}
  
// helper function - returns true if the argument is null, undefined or empty
function isNullOrUndefinedOrEmpty(val){
  return val === null || val === undefined || val === '';
}