import { ALL_PROJECTS, LANDING_PAGE, ONLINE_STORES, APPS, DESIGN } from '../constants/filter';

export function filterAllProjects() {
  return {
    type: ALL_PROJECTS,
    filter: "allProjects"
  }
}

export function filterLandingPage() {
  return {
    type: LANDING_PAGE,
    filter: "landingPage"
  }
}

export function filterOnlineStore() {
  return {
    type: ONLINE_STORE,
    filter: "onlineStore"
  }
}

export function filterApp() {
  return {
    type: APP,
    filter: "app"
  }
}

export function filterDesign() {
  return {
    type: DESIGN,
    filter: "design"
  }
}