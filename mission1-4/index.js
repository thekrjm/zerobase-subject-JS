let date = new Date();
const calendar = () => {
    // const navMonth = date.getMonth();
    const navYear = date.getFullYear();

    document.querySelector('.year').textContent = navYear;
}

calendar();