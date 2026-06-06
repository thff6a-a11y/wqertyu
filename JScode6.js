document.addEventListener('DOMContentLoaded', function () {
  var randomData = [
    { type: 'person', name: ' Turki Osama Abu Salem', number: '421001154', email: 'tyeck333@gmail.com' },
    { type: 'person', name: 'Ahmed Omar Al-Habouri', number: ' 422010938', email: 'amsdrt@gmail.com' },
    { type: 'person', name: ' Tariq Abdullah Al-Balawi', number: '431004261', email: '421001156@stu.ut.edu.sa' },
    { type: 'person', name: ' Mohammed Fayez Al-Balawi', number: '431005120', email: 'ckds0@gmail.com' },

  ];

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function updatePage() {
    shuffleArray(randomData);
    var tableBody = document.querySelector('#random-data-table tbody');
    tableBody.innerHTML = '';

    randomData.forEach(function (person) {
      if (person.type === 'person') {
        var tableRow = document.createElement('tr');
        tableRow.innerHTML = `
          <td>${person.name}</td>
          <td>${person.number}</td>
          <td>${person.email}</td>
        `;
        tableBody.appendChild(tableRow);
      }
    });
  }
  updatePage();
  setInterval(updatePage,1000000);
});
const btn = document.getElementById('toggle-btn');
const table = document.querySelector('table');


    