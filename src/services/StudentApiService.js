export default function StudentApiService() {
  const url = "http://localhost:8080";
  const uri = "/student";
  const add = (student) =>
    fetch(url + uri, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }).then((res) => res.json());

  const update = (student) =>
    fetch(url + uri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }).then((res) => res.json());

  const remove = (student) =>
    fetch(url + uri, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(student),
    }).then((res) => res.json());

  const getAll = () =>
    fetch(url + uri, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => {
      return res.json();
    });

  return {
    add,
    update,
    remove,
    getAll,
  };
}
