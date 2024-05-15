const { createApp } = Vue

createApp({
    data() {
        return {
            title: 'ToDoList di Giacomo',
            // toDo: '',
            toDo: [],
            newToDo: '',
        }
    },
    methods: {
        // createLi(toDo, idLista, idInput) {
        //     const newList = document.createElement('li')
        //     newList.innerHTML = toDo
        //     document.getElementById(idLista).append(newList)
        //     document.getElementById(idInput).value = ''
        // }
        addToDo(toDo, idInput) {
            this.toDo.push({ text: toDo, visible: true })
            console.log(this.toDo)
            console.log(document.getElementById(idInput).value)
            this.newToDo = ''
        },
        hideToDo(i) {
            this.toDo[i].visible = false
        }
    }
}).mount('#app')