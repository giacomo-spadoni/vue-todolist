const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'ToDoList di Giacomo',
            toDo: '',
        }
    },
    methods: {
        createLi(toDo, idLista, idInput) {
            const newList = document.createElement('li')
            newList.innerHTML = toDo
            document.getElementById(idLista).append(newList)
            document.getElementById(idInput).value = ''
        }
    }
}).mount('#app')