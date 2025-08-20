### Task-1

Access the `golden rod` color value in output.

```
const colors = {
    red: "#ff0000",
    green: "#00ff00",
    blue: "#0000ff",
    "golden rod": '#daa520'
};
```

---

### Task-2

For this object below add a property named `passenger capacity` with value 5

```js
const car = {
  make: "Toyota",
  model: "Corolla",
  year: 2020,
};
```

---

### Task-3

Display the physics marks as output.

```js
const student = {
  name: "Hamim Sakep",
  id: 5421,
  physics: {
    subject: "HSC Physics",
    author: "Shahjahan Tapan",
    marks: 30,
  },
};
```

---

### Task-4

Count the `number of properties`.

**Input:**
<br>

```js
let student = {
  name: "Ariana Grande",
  age: 21,
  city: "Gaibandha",
  isStudent: true,
};
```

**Output:**

<br>

    4

---

### Task-5

Loop through an object and print the key-value pairs with their `types`

**Input:**
<br>

```js
let myObject = {
  name: "John Doe",
  age: 25,
  city: "Example City",
  isStudent: true,
};
```

**Output:**

<br>

    key: name | type:  string
    key: age | type:  number
    key: city | type:  string
    key: isStudent | type:  boolean

---

### Task-6

Access the last skill of the developer in a nested object.

**Input:**
<br>

```js
let company = {
  name: "TechWorld",
  employees: {
    manager: { name: "Rana", age: 40 },
    developer: {
      name: "Sabbir",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
  },
};
```

**Output:**
<br>

    React

---

### Task-7

Add a nested property dimensions with width: 100 and height: 50 to the object.

**Input:**
<br>

```js
let screen = {
  brand: "Samsung",
  model: "Galaxy S22",
  price: 80000,
};
```

**Output:**
<br>

    {
    brand: "Samsung",
    model: "Galaxy S22",
    price: 80000,
    dimensions: { width: 100, height: 50 }
    }

---

### Task-8

Display the second book in the fiction category from the library object.

**Input:**
<br>

```js
let library = {
  name: "City Library",
  books: {
    fiction: ["1984", "Brave New World", "Fahrenheit 451"],
    nonFiction: ["Sapiens", "Educated"],
  },
};
```

**Output:**
<br>

    Brave New World

---

### Task-9

Count the total number of cast members in the movie object.

**Input:**
<br>

```js
let movie = {
  title: "Interstellar",
  director: "Christopher Nolan",
  cast: [
    "Matthew McConaughey",
    "Anne Hathaway",
    "Jessica Chastain",
    "Michael Caine",
  ],
};
```

**Output:**
<br>

    4

---

### Task-10

Loop through the features object and print key-value pairs with their types.

**Input:**
<br>

```js
let smartphone = {
  brand: "iPhone",
  model: "14 Pro",
  features: {
    camera: "48MP",
    battery: "3500mAh",
    connectivity: ["5G", "WiFi 6", "Bluetooth 5.0"],
  },
};
```

**Output:**
<br>

    key: camera | type: string
    key: battery | type: string
    key: connectivity | type: object
