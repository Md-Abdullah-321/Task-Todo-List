export const getSearchedTodos = (todos, search) => {
    if (search === "") return todos;
    const searchedTodos = {}
    const keys = Object.keys(todos);
            keys.forEach((date) => {
                if (todos[date] && date !== "_persist") {
                    todos[date].forEach(todo => {
                        if (todo.title.toLowerCase().includes(search.toLowerCase())) {
                            if (searchedTodos[date]) {
                                searchedTodos[date].push(todo);
                            } else {
                                searchedTodos[date] = [todo]
                            }
                        }
                    }) 
                }
            });
    
    return searchedTodos;
}