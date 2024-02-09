export const getFilteredTodos = (todos, filter) => {
    if (!filter) {
        return todos;
    }

    const filteredTodos = {};
    const keys = Object.keys(todos);
    keys.forEach((date) => {
        if (todos[date] && date !== "_persist") {
            todos[date].forEach(todo => {
                if (todo.priority === filter) {
                    if (filteredTodos[date]) {
                        filteredTodos[date].push(todo);
                    } else {
                        filteredTodos[date] = [todo];
                    }
                }
            })
        }
    });
    return filteredTodos;
}