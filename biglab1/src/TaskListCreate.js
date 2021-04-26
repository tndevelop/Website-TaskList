import dayjs from 'dayjs';

function Task(id, description, isImportant = false, isPrivate = true, deadline = false) {
    this.id = id;
    this.description = description;
    this.important = isImportant;
    this.private = isPrivate;
    // saved as dayjs object
    if (deadline !== false) {
        this.deadline = dayjs(deadline);
    }
    this._formatDeadline = (format) => {
        return this.deadline ? this.deadline.format(format) : '<not defined>';
    }

    //Filters
    this.isImportant = () => { return this.important; }

    this.isPrivate = () => { return this.private; }

    this.isToday = () => {
        const comparisonTemplate = 'YYYY-MM-DD';
        const now = dayjs();
        return this.deadline && (this.deadline.format(comparisonTemplate) === now.format(comparisonTemplate));
    }

    this.isYesterday = () => {
        const comparisonTemplate = 'YYYY-MM-DD';
        const yesterday = dayjs().subtract(1, 'day');
        return this.deadline && (this.deadline.format(comparisonTemplate) === yesterday.format(comparisonTemplate));
    }

    this.isTomorrow = () => {
        const comparisonTemplate = 'YYYY-MM-DD';
        const tomorrow = dayjs().add(1, 'day');
        return this.deadline && (this.deadline.format(comparisonTemplate) === tomorrow.format(comparisonTemplate));
    }


    this.isNextWeek = () => {
        const tomorrow = dayjs().add(1, 'day');
        const nextWeek = dayjs().add(7, 'day');
        const ret = this.deadline && (!this.deadline.isBefore(tomorrow, 'day') && !this.deadline.isAfter(nextWeek, 'day'));
        return ret;
    }
}


function List() {
    this.list = [];
    this.count=0;

    this.createElement = (description, isUrgent, isPrivate, deadline) => {
        const task = new Task(this.count, description, isUrgent, isPrivate, deadline);
        this.count++;
        this.add(task);
    }

    this.add = (task) => {
        if (!this.list.some(t => t.id === task.id))
            this.list = [...this.list, task];
        else throw new Error('Duplicate id');
    };

    this.filterAll = () => {
        return this.list.filter( () => true);
    }

    this.filterByImportant = () => {
        return this.list.filter((task) => task.isImportant());
    }

    this.filterByToday = () => {
        return this.list.filter( (task) => task.isToday() );
    }

    this.filterByNextWeek = () => {
        return this.list.filter( (task) => task.isNextWeek() );
    }

    this.filterByPrivate = () => {
        return this.list.filter( (task) => task.isPrivate() );
    }

    this.getList = () => this.list;
};

export { Task, List }