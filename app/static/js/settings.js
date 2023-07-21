new Vue({
      el: '#app',
      data: {
        tableData: []
      },
      created() {
        this.fetchData();
        setInterval(this.fetchData, 1000); // Запрашивать данные каждую секунду
      },
      methods: {
        fetchData() {
          // Здесь должен быть запрос на сервер для получения данных в формате JSON
          // Предполагается, что данные будут в виде массива объектов с полями "name" и "value"

          // Вместо реального запроса используем моковые данные
          // Замените этот код на фактический запрос к серверу
          const mockData = [
            { name: 'Parameter 1', value: 10 },
            { name: 'Parameter 2', value: 20 },
            { name: 'Parameter 3', value: 30 }
          ];

          this.tableData = mockData;
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