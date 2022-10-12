import GUESTMutations from "./mutations/GUEST.mutations.js";
import visitMutations from "./mutations/visit.mutations.js";
import GUESTActions from "./actions/GUEST.actions.js";
import visitActions from "./actions/visit.actions.js";

import getters from "./visit.getters.js";

export default {
  state() {
    return {
      visits: [],
      upcomingVisits: [],
      calendarEvents: [],

      visit: {},
      visitsLastFetch: "",
      upcomingVisitTitle: "",

      eventsLastFetchParams: {},
      upcomingLastFetchParams: {},

      showvisitForm: false,
      showVisitsToday: true,
      showPinCodeCheckIn: false,
      awaitingVisitsOnly: false,
    };
  },
  mutations: { ...GUESTMutations, ...visitMutations },
  actions: { ...visitActions, ...GUESTActions },
  getters,
};
