class StateStore {
    states = ['NEXT', 'IN PROGRESS', 'REVIEW', 'DONE'];
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
