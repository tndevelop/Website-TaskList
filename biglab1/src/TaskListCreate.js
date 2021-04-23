import dayjs from 'dayjs';

function Task(id, description, isUrgent = false, isPrivate = true, deadline = false) {
    this.id = id;
    this.description = description;
    this.urgent = isUrgent;
    this.private = isPrivate;
    // saved as dayjs object
    if(deadline!==false){
        this.deadline = dayjs(deadline);
    }
    this._formatDeadline = (format) => {
        return this.deadline ? this.deadline.format(format) : '<not defined>';
    }
}

function List() {
    this.list = [];

    this.add = (task) => {
        if (!this.list.some(t => t.id === task.id))
            this.list = [...this.list, task];
        else throw new Error('Duplicate id');
    };

    this.sortByDeadline = () => {
        return [...this.list]
            .sort((a, b) => {
                const t1 = a.deadline, t2 = b.deadline;
                if (t1 === t2) return 0; // works also for null === null
                else if (t1 === null || t1 === '') return 1;    // null/empty deadline is the lower value
                else if (t2 === null || t2 === '') return -1;
                else return t1.diff(t2)
            });
    }

    this.filterByUrgent = () => {
        return this.list
            .filter((task) => task.urgent);
    }
};

export { Task, List }