class StateStore {
    states = ['IN PROGRESS', 'REVIEW', 'DONE'];
    // default REVIEW
    activeId = 1;

    getStates() {
        return this.states
    }

    getActiveState() {
        return this.states[this.activeId];
    }
}

export default new StateStore();
