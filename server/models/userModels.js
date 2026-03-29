export function getAllUsers(req, res) {
  res.json(users);
}
const users = [
  {
    id: 1,
    fullName: "John Doe",
    email: "john@example.com",
    contactNumber: "+123456789",
    city: "London",
    town: "Chelsea",
    country: "UK",
    language: "English",
    ip: "192.168.1.1",
    subscriptionPlan: "monthly",
    subscriptionPrice: 50,
    subscriptionEnd: "2026-04-10T00:00:00Z"
  },
  {
    id: 2,
    fullName: "Jane Smith",
    email: "jane@example.com",
    contactNumber: "+987654321",
    city: "New York",
    town: "Brooklyn",
    country: "USA",
    language: "English",
    ip: "192.168.2.2",
    subscriptionPlan: "annual",
    subscriptionPrice: 500,
    subscriptionEnd: "2027-03-24T00:00:00Z"
  }
];