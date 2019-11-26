class StateStore {
    states = ['Next', 'In Progress', 'Review', 'Done'];
    // default REVIEW
    activeId = 2;

    getStates() {
        return this.states
    }

    getActiveState() {
        return this.states[this.activeId];
    }
}

export default new StateStore();
