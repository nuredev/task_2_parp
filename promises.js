async function fetchData() {
    const data = await fetch("https://api.example.com/data");
    if (!data.ok) {
        return null;
    }
    return data.json();
}

fetchData().then(response => console.log(response));
