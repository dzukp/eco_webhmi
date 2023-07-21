
new Vue({
      el: '#app',
      data: {
        tableData: []
      },
      created() {
        this.fetchData();
        setInterval(this.fetchData, 2000); // Запрашивать данные каждую секунду
      },
      methods: {
        fetchData() {
          var tableData = []
          fetch('/api/tagsrv')
            .then(response => response.json())
            .then(data => {
              this.tableData = data
              for (var i in data) {
                data[i].class = data[i].ok ? "table-success" : "table-danger"
                data[i].tag_vals = data[i].tags.map(item => item == 'None' ? '-' : item).join(' ')
                data[i].last_time = data[i].last_ok < 99999 ? data[i].last_ok : '-'
              }
            })
            .catch(error => {
              console.error('Ошибка при выполнении запроса:', error);
            });
        },
        updateValue(item) {
          // Выполнять запрос на сервер для обновления значения
          // Передавать имя параметра и новое значение

          // Вместо реального запроса используем вывод в консоль
          // Замените этот код на фактический запрос к серверу
          console.log('Updating value:', item.name, item.value);
        }
      }
    });