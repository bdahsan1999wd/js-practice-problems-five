let myObject = {
    name: 'John Doe',
    age: 25,
    city: 'Example City',
    isStudent: true
};
// console.log(myObject);

// Loop through each key in the object
for (let key in myObject) {

    // Using Object.hasOwn to check if key is own property
    if (Object.hasOwn(myObject, key)) {

        // Get the value of the current property
        let value = myObject[key];
        // console.log(value);

        // Get the type of the value
        let valueType = typeof value;
        // console.log(valueType);

        // Show the key name
        // console.log(key);

        console.log('Key:', key, '| Type:', valueType);
        // console.log('Key:', key, '| Value:', value, '| Type:', valueType);
    }
}