import { BarChart2, HelpCircle, Home, Mail, Settings, Users } from "lucide-react";
import Dashboard from "../pages/dashboard/Dashboard";
import Contacts from "../pages/dashboard/contacts";
import EmailCampaign from "../pages/dashboard/EmailCampaign";
import Analytics from "../pages/dashboard/Analytics";
import HelpSupport from "../pages/dashboard/HelpSupport";
import Setting from "../pages/dashboard/Settings";

// Define navigation routes for dashboard pages
export const navigationRoutes = [
    { name: 'Dashboard', icon: Home, id: 'dashboard', path: '/', component: Dashboard },
    { name: 'Contacts', icon: Users, id: 'contacts', path: '/contacts', component: Contacts },
    { name: 'Email Campaign', icon: Mail, id: 'email', path: '/email', component: EmailCampaign },
    { name: 'Analytics', icon: BarChart2, id: 'analytics', path: '/analytics', component: Analytics },
    { name: 'Settings', icon: Settings, id: 'settings', path: '/settings', component: Setting },
    { name: 'Help & Support', icon: HelpCircle, id: 'help', path: '/help', component: HelpSupport }
  ];


  export const authRoutes = [
    // { path: '/enter', component: Login },
    // { path: '/enter/new-user', component: Register },
    // { path: '/enter/forgot-password', component: ForgotPassword },
    // { path: '/enter/verify-email/:token/:id', component: EmailVerification },
    // { path: '/enter/reset-password/:token', component: ResetPassword }
  ];