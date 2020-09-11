
export const routes = {
  '/dashboard': {
    icon: 'home',
    route: '/dashboard',
    title: 'Dashboard',
    showDates: true
  },
  '/reports': {
    icon: 'area-chart',
    route: '/reports',
    title: 'Reports',
    showDates: true
  },
  '/fees-calculator': {
    icon: 'calculator',
    route: '/fees-calculator',
    title: 'Fees Calulator'
  },
  '/files': {
    icon: 'file',
    route: '/files',
    title: 'Files'
  },
  '/settings': {
    icon: 'cog',
    route: '/settings',
    title: 'Settings'
  },
  '/settings/membership': {
    route: '/settings/membership',
    hideSideBar: true
  },
  '/sign-in': {
    route: '/sign-in',
    unprotectedRoute: true
  },
  '/sign-up': {
    route: '/sign-up',
    unprotectedRoute: true
  },
  '/privacy-policy': {
    route: '/privacy-policy',
    unprotectedRoute: true,
    isLegalRoute: true
  },
  '/terms-of-service': {
    route: '/terms-of-service',
    unprotectedRoute: true,
    isLegalRoute: true
  }
}
