let smartphone = {
    brand: "iPhone",
    model: "14 Pro",
    features: {
        camera: "48MP",
        battery: "3500mAh",
        connectivity: ["5G", "WiFi 6", "Bluetooth 5.0"]
    }
};

// Loop through each feature key in the features object
for (let key in smartphone.features) {

    // Get the type of the current feature value
    const valueType = typeof smartphone.features[key];

    console.log('Key:', key, '| Type:', valueType);
}