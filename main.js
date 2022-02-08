console.log("Hello1")

const customerCard = document.getElementById('customer-card');

function nameToAbbr (stateName) {
    const idx = usStates.findIndex(function (state) {
      return state.name === stateName.toUpperCase()
    })
  
    if (idx === -1) {
      return null
    }
  
    return usStates[idx].abbreviation
}

for (let customer of customers) {
let firstName = customer.name.first
console.log(firstName)
let lastName = customer.name.last
console.log(lastName)
let image = customer.picture.large
console.log(image)
let email = customer.email
console.log(email)
let houseNumber = customer.location.street.number
let streetName = customer.location.street.name
let city = customer.location.city
console.log(city)
const states = usStates
let state = states.abbreviation
let zipCode = customer.location.postcode
let birthDay = moment(customer.dob.date).format("MMM D, YYYY")
let dateOfBirth = 'DOB: ' + birthDay
let register = moment(customer.registered.date).format("MMM D, YYYY")
let registered = "Customer since: " + register

customerCard.innerHTML += `<img class="customer-image" src=${image} />`

const h2El = document.createElement('h2')
const h2Text = document.createTextNode(firstName + ' ' + lastName)
h2El.appendChild(h2Text)
customerCard.appendChild(h2El)

const h3El = document.createElement('p')
const h3Text = document.createTextNode(email)
h3El.appendChild(h3Text)
customerCard.appendChild(h3El)

const h4El = document.createElement('p')
const h4Text = document.createTextNode(houseNumber + ' ' + streetName + ' ' + city + ', ' + state + ' ' + zipCode)
h4El.appendChild(h4Text)
customerCard.appendChild(h4El)

const h5El = document.createElement('p')
const h5Text = document.createTextNode(dateOfBirth)
h5El.appendChild(h5Text)
customerCard.appendChild(h5El)

const h6El = document.createElement('p')
const h6Text = document.createTextNode(registered)
h6El.appendChild(h6Text)
customerCard.appendChild(h6El)
}

