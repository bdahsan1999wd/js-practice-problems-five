// Nested object with employees and developer skills
let company = {
    name: "TechWorld",
    employees: {
        manager: { name: "Rana", age: 40 },
        developer: {
            name: "Sabbir",
            skills: ["HTML", "CSS", "JavaScript", "React"]
        }
    }
};

// Access the developer's skills array
const skills = company.employees.developer.skills;

// Get the last skill in the array using slice(-1)
const lastSkill = skills.slice(-1)[0];

console.log(lastSkill);