export const countTodos = (todos) => {
    let count = 0;
    const keys = Object.keys(todos);

    keys.forEach((date) => {
        if (todos[date] && date !== "_persist") {
            count += todos[date].length;
        }
    });

    return count;
}
export const countCompletedTodos = (todos) => {
    let count = 0;
    const keys = Object.keys(todos);

    keys.forEach((date) => {
        if (todos[date] && date !== "_persist") {
            todos[date].forEach(todo => {
                if (todo.status === "complete") {
                    count++;
                }
            })
        }
    });

    return count;
}