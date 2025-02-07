const calendar = document.getElementById("calendar");
const monthYear = document.getElementById("monthYear");
const selectedDateDisplay = document.getElementById("selectedDate");

const now = new Date();
let currentMonth = now.getMonth();
let currentYear = now.getFullYear();

function loadCalendar(month, year) {
    // Definir o título com mês e ano
    monthYear.textContent = `${new Date(year, month).toLocaleString("default", { month: "long" })} ${year}`;

    // Limpar os dias do calendário
    Array.from(calendar.querySelectorAll(".day")).forEach(day => day.remove());

    // Obter o primeiro dia do mês e quantos dias o mês possui
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Preencher os dias em branco antes do primeiro dia do mês
    for (let i = 0; i < firstDay; i++) {
        const blank = document.createElement("div");
        blank.classList.add("day");
        calendar.appendChild(blank);
    }

    // Preencher os dias do mês
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement("div");
        dayElement.classList.add("day");
        dayElement.textContent = day;
        
        // Adiciona evento de clique para mostrar a data selecionada
        dayElement.addEventListener("click", () => {
            selectedDateDisplay.textContent = `Selecionado: ${day} ${monthYear.textContent}`;
        });

        calendar.appendChild(dayElement);
    }
}

// Navegação para o mês anterior
document.querySelector(".prev-month").addEventListener("click", () => {
    currentMonth = (currentMonth - 1 + 12) % 12;
    if (currentMonth === 11) currentYear -= 1;
    loadCalendar(currentMonth, currentYear);
});

// Navegação para o próximo mês
document.querySelector(".next-month").addEventListener("click", () => {
    currentMonth = (currentMonth + 1) % 12;
    if (currentMonth === 0) currentYear += 1;
    loadCalendar(currentMonth, currentYear);
});

// Carregar o calendário inicialmente
loadCalendar(currentMonth, currentYear);
