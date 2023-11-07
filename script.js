function calculateAverageExperience(event) {
    event.preventDefault();
    let hireDates = document.querySelectorAll('input[name="hireDate"]');
    let currentDate = new Date();
    let totalExperience = 0;

    for (let i = 0; i < hireDates.length; i++) {
        let hireDate = new Date(hireDates[i].value);
        let yearsOfWork = currentDate.getFullYear() - hireDate.getFullYear();
        totalExperience += yearsOfWork;
    }

    let averageExperience = Math.round(totalExperience / hireDates.length);
    document.getElementById("result").textContent = "Середній стаж роботи працівників: " + averageExperience + " років";
    document.getElementById("result").style.opacity = 1;
}
